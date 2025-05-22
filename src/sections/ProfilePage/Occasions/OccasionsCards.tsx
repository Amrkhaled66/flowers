import OccasionsCard from "src/components/ProfilePage/Occasions/OccasionsCard";
import Occasion from "src/types/UserInfo/Occasion";
const OccasionsCards = ({
  Occasions,
  onEditOccasion,
  refetch,
}: {
  onEditOccasion: (occasion: Occasion) => void;
  Occasions: Occasion[];
  refetch: () => void;
}) => {
  return (
    <div className="space-y-6">
      {Occasions.map((occasion) => (
        <OccasionsCard
          occasion={occasion}
          key={occasion.id}
          onEditOccasion={onEditOccasion}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default OccasionsCards;
