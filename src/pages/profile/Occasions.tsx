// src/sections/ProfilePage/Occasions/Occasions.tsx
import { useTranslation } from "react-i18next";
import { useOccasionsManager } from "src/hooks/profile/occastions/useOccasionsManager";
import { useGetOccasions } from "src/hooks/profile/occastions/OccasionsMutations";
import { transformOccasionFrom } from "src/utils/transforms/transformUserOccasion";
import { AddOccasionButton } from "src/components/ProfilePage/Occasions/AddOccasionButton";

import EmptyOccasions from "src/sections/ProfilePage/Occasions/EmptyOccasions";
import AddOccasionModal from "src/sections/ProfilePage/Occasions/AddOccasionModal";
import OccasionsCards from "src/sections/ProfilePage/Occasions/OccasionsCards";
import EditOccasionModal from "src/sections/ProfilePage/Occasions/EditOccasionModal";
import InfoCardSkeleton from "src/components/ui/Skeletons/InfoCardSkeleton.tsx";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";

const Occasions = () => {
  const { t } = useTranslation("profile");
  const {
    showAddModal,
    editedOccasion,
    handleAddClick,
    handleCloseAddModal,
    handleCloseEditModal,
    setEditedOccasion,
  } = useOccasionsManager();

  const { data, isLoading, refetch, isError } = useGetOccasions();
  if (isError) return null;

  const hasOccasions = data && data.length > 0;

  const transforedmOccasions = hasOccasions && data.map(transformOccasionFrom);

  return (
    <ProfilePageCompetent>
      <div className="space-y-6">
        {!isLoading && !hasOccasions && <EmptyOccasions />}

        <AddOccasionButton onClick={handleAddClick} label={t("occasion.add")} />

        <AddOccasionModal
          isOpen={showAddModal}
          onClose={handleCloseAddModal}
          refetch={refetch}
        />
        {isLoading && (
          <>
            <InfoCardSkeleton />
            <InfoCardSkeleton />
          </>
        )}

        {hasOccasions && (
          <OccasionsCards
            Occasions={transforedmOccasions}
            refetch={refetch}
            onEditOccasion={setEditedOccasion}
          />
        )}

        {editedOccasion && (
          <EditOccasionModal
            editedOccasion={editedOccasion}
            onClose={handleCloseEditModal}
            refetch={refetch}
          />
        )}
      </div>
    </ProfilePageCompetent>
  );
};

export default Occasions;
