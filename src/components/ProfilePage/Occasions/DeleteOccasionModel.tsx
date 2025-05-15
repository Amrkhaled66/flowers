// components/profile/DeleteOccasion.tsx
import DeletionModal from "src/components/ui/DeletionModel";
import { useDeleteOccasion } from "src/hooks/profile/OccasionsHooks";
interface DeleteOccasionProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

const DeleteOccasion = ({ isOpen, onClose, id }: DeleteOccasionProps) => {
  const { mutate, isPending } = useDeleteOccasion();
  const onConfirm = () => {
    mutate(id, {
      onSuccess: () => {
        onClose();
      },
    });
  };
  return (
    <DeletionModal
      isPending={isPending}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title="Are you sure you want to delete this event?"
      message="This occasion will be remembered forever."
      confirmText="Yes, Delete"
      cancelText="Cancel"
    />
  );
};

export default DeleteOccasion;
