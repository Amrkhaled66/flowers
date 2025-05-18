// components/profile/DeleteOccasion.tsx
import DeletionModal from "src/components/ui/DeletionModel";

import { useDeleteOccasion } from "src/hooks/profile/OccasionsHooks";
import { useTranslation } from "react-i18next";

interface DeleteOccasionProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
}

const DeleteOccasion = ({ isOpen, onClose, id }: DeleteOccasionProps) => {
  const { mutate, isPending } = useDeleteOccasion();
  const { t } = useTranslation("profile")

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
      title={t("occasion.deletionModel.title")}
      message={t("occasion.deletionModel.message")}
      confirmText={t("occasion.deletionModel.confirmText")}
      cancelText={t("occasion.deletionModel.cancelText")}
    />
  );
};

export default DeleteOccasion;
