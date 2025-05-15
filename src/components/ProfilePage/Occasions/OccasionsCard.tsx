import Occasion from "src/types/UserInfo/Occasion";
import Row from "src/components/ui/ProfileCard/Row";
import ProfileCard from "src/components/ui/ProfileCard/ProfileCard";
import DeleteOccasionModel from "src/components/ProfilePage/Occasions/DeleteOccasionModel";
import { useState } from "react";
const OccasionCard = ({
  occasion: { event_title, event_date, type, id, note },
  onEditOccasion,
}: {
  occasion: Occasion;
  onEditOccasion: (occasion: Occasion) => void;
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleEditOccasion = () =>
    onEditOccasion({ id, event_title, event_date, type, note });

  const onDelete = () => setIsDeleteModalOpen(true);

  return (
    <ProfileCard onDelete={onDelete} onEdit={handleEditOccasion}>
      {isDeleteModalOpen && (
        <DeleteOccasionModel
          id={id}
          isOpen={isDeleteModalOpen}
          onClose={() => setIsDeleteModalOpen(false)}
        />
      )}
      <div>
        <Row name="Event title" value={event_title} />
        <Row name="Event date" value={event_date} />
        <Row name="Type of occasion" value={type} />
      </div>
    </ProfileCard>
  );
};

export default OccasionCard;
