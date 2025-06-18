import { useAddOccasion } from "src/hooks/profile/occastions/OccasionsMutations";
import OccasionModal from "src/components/ProfilePage/Occasions/OccasionModel";
import Occasion from "src/types/UserInfo/Occasion";
const AddOccasionModal = ({
  isOpen,
  onClose,
  refetch,
}: {
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}) => {
  const { mutate, isPending,isSuccess } = useAddOccasion();
  const handleSubmit = async (occasion: Occasion) => {
    mutate(occasion, {
      onSuccess: () => {
        refetch();
        onClose();
      },
    });
  };

  return (
    <OccasionModal
      onSubmit={handleSubmit}
      isPending={isPending}
      isOpen={isOpen}
      onClose={onClose}
      isSuccess={isSuccess}
    />
  );
};

export default AddOccasionModal;
