import OccasionsCard from "src/components/ProfilePage/Occasions/OccasionsCard";
import Occasion from "src/types/Occasion";

const Occasions: Occasion[] = [
  {
    eventTitle: "Birthday",
    eventDate: "1/8/2002",
    type: "Birthday",
    id: 1,
    note: "",
  },
];

const OccasionsCards = ({
  onEditOccasion,
}: {
  onEditOccasion: (occasion: Occasion) => void;
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
