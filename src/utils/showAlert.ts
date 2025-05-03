import Swal from "sweetalert2";

interface AlertProps {
  title: string;
  text: string;
  icon: "success" | "error" | "warning" | "info" | "question"; // better typing
  confirmButtonText: string;
}

const showAlert = ({ title, text, icon, confirmButtonText }: AlertProps) => {
  return Swal.fire({
    title,
    text,
    icon,
    confirmButtonColor: "#534457",
    confirmButtonText,
  });
};

export default showAlert;
