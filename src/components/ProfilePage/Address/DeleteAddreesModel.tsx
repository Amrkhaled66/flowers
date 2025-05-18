import DeletionModal from "src/components/ui/DeletionModel";
import { useDeleteAddress } from "src/hooks/profile/addresses/useAddressMutations";
import { useTranslation } from "react-i18next";
interface DeleteAddressProps {
  isOpen: boolean;
  onClose: () => void;
  id: number;
  refetch: () => void;
}

const DeleteAddressModel = ({
  isOpen,
  onClose,
  id,
  refetch,
}: DeleteAddressProps) => {
  const { mutate, isPending } = useDeleteAddress();
  const { t } = useTranslation("profile");
  const onConfirm = () =>
    mutate(id, {
      onSuccess: () => {
        onClose();
        refetch();
      },
    });
  return (
    <DeletionModal
      isPending={isPending}
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={t("address.deletionModel.title")}
      message={t("address.deletionModel.message")}
      confirmText={t("address.deletionModel.confirmText")}
      cancelText={t("address.deletionModel.cancelText")}
    />
  );
};

export default DeleteAddressModel;
