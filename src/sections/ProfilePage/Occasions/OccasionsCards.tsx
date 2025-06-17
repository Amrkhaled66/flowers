import OccasionsCard from "src/components/ProfilePage/Occasions/OccasionsCard";
import Occasion from "src/types/UserInfo/Occasion";
import { useGetOccasions } from "src/hooks/filter/useFilterSectionsMutations";

const OccasionsCards = ({
  Occasions,
  onEditOccasion,
  refetch,
}: {
  onEditOccasion: (occasion: Occasion) => void;
  Occasions: Occasion[];
  refetch: () => void;
}) => {
  const { data: allOccasions } = useGetOccasions();
  const getOccasionById = (id: number) => {
    const occasion = allOccasions.find(
      (occasion: { id: number }) => id === occasion.id,
    );
    return occasion
      ? { nameAr: occasion.nameAr, nameEn: occasion.nameEn }
      : undefined;
  };
  return (
    <div className="space-y-6">
      {Occasions.map((occasion) => (
        <OccasionsCard
          occasion={occasion}
          key={occasion.id}
          onEditOccasion={onEditOccasion}
          refetch={refetch}
          getOccasionById={getOccasionById}
        />
      ))}
    </div>
  );
};

export default OccasionsCards;
