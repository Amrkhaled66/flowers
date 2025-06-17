import Occasion from "src/types/UserInfo/Occasion";

import Row from "src/components/ui/ProfileCard/Row";
import ProfileCard from "src/components/ui/ProfileCard/ProfileCard";
import DeleteOccasionModel from "src/components/ProfilePage/Occasions/DeleteOccasionModel";
import { useState } from "react";
import { getLocalizedName } from "src/utils/getLocalizedName";
const OccasionCard = ({
  occasion: { eventDate, eventTitle, id, note, occasionId },
  onEditOccasion,
  refetch,
  getOccasionById
}: {
  occasion: Occasion;
  onEditOccasion: (occasion: Occasion) => void;
  refetch: () => void;
  getOccasionById: (id: number) => { nameAr: string, nameEn: string } | undefined;
}) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const handleEditOccasion = () =>
    onEditOccasion({ occasionId: id || null, eventTitle, eventDate, note });

  const onDelete = () => setIsDeleteModalOpen(true);

  const selectedOccasion = getOccasionById(occasionId || 0)
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
        <Row name="Type of occasion" value={selectedOccasion && getLocalizedName(selectedOccasion) || ""} />
      </div>
    </ProfileCard>
  );
};

export default OccasionCard;
