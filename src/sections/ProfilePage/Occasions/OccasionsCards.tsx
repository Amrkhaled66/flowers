import OccasionsCard from "src/components/ProfilePage/Occasions/OccasionsCard";
import Occasion from "src/types/UserInfo/Occasion";
const OccasionsCards = ({
  Occasions,
  onEditOccasion,
}: {
  onEditOccasion: (occasion: Occasion) => void;
  Occasions: Occasion[];
}) => {
  return (
    <div>
      {Occasions.map((occasion) => (
        <OccasionsCard
          occasion={occasion}
          key={occasion.id}
          onEditOccasion={onEditOccasion}
        />
      ))}
    </div>
  );
};

export default OccasionsCards;
