import DeletionModal from "src/components/ui/DeletionModel";
import { useDeleteAddress } from "src/hooks/profile/addresses/useAddressMutations";
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
      title="Are you sure you want to delete this address?"
      message="This address will be removed from your profile."
      confirmText="Yes, Delete Address"
      cancelText="Cancel"
    />
  );
};

export default DeleteAddressModel;
