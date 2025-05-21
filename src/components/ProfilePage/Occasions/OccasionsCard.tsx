import Occasion from "src/types/UserInfo/Occasion";
import Row from "src/components/ui/ProfileCard/Row";
import ProfileCard from "src/components/ui/ProfileCard/ProfileCard";
import DeleteOccasionModel from "src/components/ProfilePage/Occasions/DeleteOccasionModel";
import { useState } from "react";
const OccasionCard = ({
  occasion: { eventDate, eventTitle, id, note, type },
  onEditOccasion,
  refetch,
}: {
  occasion: Occasion;
  onEditOccasion: (occasion: Occasion) => void;
  refetch: () => void;
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditOccasion = () =>
    onEditOccasion({ id, eventTitle, eventDate, type, note });

  const onDelete = () => setIsDeleteModalOpen(true);

  return (
    <ProfileCard onDelete={onDelete} onEdit={handleEditOccasion}>
      {isDeleteModalOpen && (
        <DeleteOccasionModel
          refetch={refetch}
          id={id}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
      <div>
        <Row name="Event title" value={eventTitle} />
        <Row name="Event date" value={eventDate} />
        <Row name="Type of occasion" value={type} />
      </div>
    </ProfileCard>
  );
};

export default OccasionCard;
