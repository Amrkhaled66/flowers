
import os
import subprocess
import ftplib
from datetime import datetime
import argparse
import logging

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.StreamHandler(),
        logging.FileHandler('ftp_sync.log')
    ]
)
logger = logging.getLogger(__name__)

def parse_arguments():
    parser = argparse.ArgumentParser(description='Sync git changes to FTP server')
    parser.add_argument('--since', default='1 day ago', help='Git since parameter (e.g., "1 day ago", "2023-01-01")')
    parser.add_argument('--host', required=True, help='FTP host')
    parser.add_argument('--user', required=True, help='FTP username')
    parser.add_argument('--password', required=True, help='FTP password')
    parser.add_argument('--local-base', default=os.path.expanduser('~/gad'), help='Local base directory')
    parser.add_argument('--remote-base', default='/public_html/test.gad-alla.com', help='Remote base directory on FTP')
    return parser.parse_args()

def get_changed_files(since):
    """Get files changed since the specified time using git log"""
    try:
        cmd = ['git', 'log', '--name-status', f'--since="{since}"']
        result = subprocess.run(cmd, capture_output=True, text=True, check=True)

        files = []
        for line in result.stdout.splitlines():
            if line.startswith(('A', 'M')):  # Added or Modified files
                parts = line.split()
                if len(parts) >= 2:
                    status = parts[0]
                    filepath = parts[1]
                    files.append(filepath)

        return list(set(files))  # Remove duplicates
    except subprocess.CalledProcessError as e:
        logger.error(f"Git command failed: {e}")
        logger.error(f"Output: {e.stderr}")
        return []

def upload_to_ftp(ftp, local_base, remote_base, changed_files):
    """Upload changed files to FTP server"""
    success_count = 0
    error_count = 0

    for file_path in changed_files:
        local_file_path = os.path.join(local_base, file_path)
        remote_file_path = os.path.join(remote_base, file_path)

        if not os.path.exists(local_file_path):
            logger.warning(f"Local file not found: {local_file_path}")
            continue

        try:
            # Create remote directories if they don't exist
            remote_dir = os.path.dirname(remote_file_path)
            create_remote_dirs(ftp, remote_dir)

            # Upload the file
            with open(local_file_path, 'rb') as file:
                logger.info(f"Uploading: {local_file_path} → {remote_file_path}")
                ftp.storbinary(f'STOR {remote_file_path}', file)

            success_count += 1
        except ftplib.all_errors as e:
            logger.error(f"FTP error uploading {local_file_path}: {e}")
            error_count += 1

    return success_count, error_count

def create_remote_dirs(ftp, remote_dir):
    """Create remote directories recursively if they don't exist"""
    if remote_dir == '/' or remote_dir == '':
        return

    parts = remote_dir.split('/')
    current_path = ''

    for part in parts:
        if not part:
            continue

        current_path += '/' + part

        try:
            ftp.cwd(current_path)
        except ftplib.error_perm:
            try:
                ftp.mkd(current_path)
                logger.info(f"Created directory: {current_path}")
            except ftplib.error_perm as e:
                logger.error(f"Failed to create directory {current_path}: {e}")
                raise

def main():
    args = parse_arguments()

    try:
        # Save current directory to return to it later
        original_dir = os.getcwd()

        # Change to the git repository directory
        os.chdir(args.local_base)

        # Get changed files
        logger.info(f"Checking git for changes since: {args.since}")
        changed_files = get_changed_files(args.since)

        if not changed_files:
            logger.info("No changed files found.")
            return

        logger.info(f"Found {len(changed_files)} changed files.")

        # Extract the hostname part if username contains @ (some hosting providers use this format)
        host = args.host
        user = args.user
        if '@' in user:
            # Don't modify the username since it's actually in the correct format
            # The FTP library will handle it
            pass

        # Connect to FTP server
        logger.info(f"Connecting to FTP server: {host}")
        with ftplib.FTP(host) as ftp:
            ftp.login(user, args.password)
            logger.info("FTP login successful.")

            # Upload files
            success_count, error_count = upload_to_ftp(
                ftp, args.local_base, args.remote_base, changed_files)

        # Log results
        logger.info(f"Upload completed: {success_count} successful, {error_count} failed")

        # Return to original directory
        os.chdir(original_dir)

    except Exception as e:
        logger.error(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    main()
