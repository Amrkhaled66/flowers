import Button from "src/components/ui/Button";
import EmptyOccasions from "src/sections/ProfilePage/Occasions/EmptyOccasions";
import AddOccasionModal from "src/sections/ProfilePage/Occasions/AddOccasionModal";
import OccasionsCards from "src/sections/ProfilePage/Occasions/OccasionsCards";

import { Icon } from "@iconify/react/dist/iconify.js";

import { useState } from "react";
import Occasion from "src/types/Occasion";

const Occasions = () => {
  const [showOccasionForm, setShowOccasionForm] = useState(false);
  const [editedOccasion, setEditedOccasion] = useState<Occasion | null>(null);

  const onEditOccasion = (occasion: Occasion) => setEditedOccasion(occasion);
  const handleAddOccasion = () => setShowOccasionForm(true);
  const handleCloseModal = () => setShowOccasionForm(false);

  return (
    <div className="space-y-6">
      <EmptyOccasions />
      <div className="dashed-border divide-dashed rounded-xl p-2">
        <Button
          onClick={handleAddOccasion}
          text="Add a new address"
          icon={<Icon icon="line-md:plus" width="24" height="24" />}
          className="bg-main-100 animate text-main w-full rounded-sm text-center font-bold"
        />
      </div>
      <AddOccasionModal isOpen={showOccasionForm} onClose={handleCloseModal} />
      <OccasionsCards onEditOccasion={onEditOccasion} />
      {editedOccasion && (
        <AddOccasionModal
          Data={editedOccasion}
          isOpen={true}
          onClose={() => setEditedOccasion(null)}
        />
      )}
    </div>
  );
};

export default Occasions;
