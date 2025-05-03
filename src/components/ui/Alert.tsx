import Swal  from "sweetalert2";

interface AlertProps {
  title: string;
  text: string;
  icon: string;
  confirmButtonText: string;
}
const Alert = ({
  title,
  text,
  icon,
  confirmButtonText,
}: AlertProps) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: "#534457",
    confirmButtonText,
  });
};

export default Alert;
