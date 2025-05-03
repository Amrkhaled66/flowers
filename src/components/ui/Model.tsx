import { useEffect } from "react";
import { createPortal } from "react-dom";
import Overlay from "src/components/ui/Overlay";
import { ReactNode } from "react";
const Model = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);
  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div className="relative z-[80] flex w-full items-center justify-center">
      <div
        className="bg-opacity-50 fixed top-0 left-0 h-full w-full"
        onClick={onClose}
      >
        <Overlay />
      </div>
      <div className="font-main fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        {children}
      </div>
    </div>,
    document.body,
  );
};
export default Model;
