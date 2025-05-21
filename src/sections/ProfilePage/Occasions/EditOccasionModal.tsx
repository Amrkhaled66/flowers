import { useUpdateOccasion } from "src/hooks/profile/occastions/OccasionsMutations";
import OccasionModal from "src/components/ProfilePage/Occasions/OccasionModel";
import Occasion from "src/types/UserInfo/Occasion";

const EditOccasionModal = ({
  editedOccasion,
  onClose,
  refetch,
}: {
  editedOccasion: Occasion;
  onClose: () => void;
  refetch: () => void;
}) => {
  const { mutate, isPending } = useUpdateOccasion();
  const handleSubmit = async (occasion: Occasion) => {
    mutate(
      { occasion, id: occasion.id || null },
      {
        onSuccess: () => {
          refetch();
          onClose();
        },
      },
    );
  };

  return (
    <OccasionModal
      FormData={editedOccasion}
      onSubmit={handleSubmit}
      isPending={isPending}
      isOpen
      onClose={onClose}
    />
  );
};

export default EditOccasionModal;
