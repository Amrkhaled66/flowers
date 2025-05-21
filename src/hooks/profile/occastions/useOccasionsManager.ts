// src/hooks/profile/useOccasionsManager.ts
import { useState } from "react";
import Occasion from "src/types/UserInfo/Occasion";

export const useOccasionsManager = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editedOccasion, setEditedOccasion] = useState<Occasion | null>(null);

  const handleAddClick = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);
  const handleCloseEditModal = () => setEditedOccasion(null);

  return {
    showAddModal,
    editedOccasion,
    handleAddClick,
    handleCloseAddModal,
    handleCloseEditModal,
    setEditedOccasion,
  };
};