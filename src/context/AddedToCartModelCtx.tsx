// src/context/AddToCartModalCtx.tsx
import { createContext, useContext, useState } from "react";

type AddToCartModalContextType = {
  productId: string | null;
  isOpen: boolean;
  openModal: (id: string) => void;
  closeModal: () => void;
};

const AddToCartModalContext = createContext<AddToCartModalContextType | undefined>(undefined);

export const AddToCartModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [productId, setProductId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (id: string) => {
    setProductId(id);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setProductId(null);
  };

  return (
    <AddToCartModalContext.Provider value={{ productId, isOpen, openModal, closeModal }}>
      {children}
    </AddToCartModalContext.Provider>
  );
};

export const useAddToCartModal = () => {
  const ctx = useContext(AddToCartModalContext);
  if (!ctx) throw new Error("useAddToCartModal must be used inside AddToCartModalProvider");
  return ctx;
};
