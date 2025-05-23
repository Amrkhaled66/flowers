import React, { createContext, useState, useContext } from "react";

type Item = {
  id: number;
  product_id: number;
};
type FavoritesContextType = {
  favorites: Item[];
  storeFavorites: (items: Item[]) => void;
  isFavorite: (id: number) => number;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<Item[]>([]);

  const storeFavorites = (items: Item[]) => {
    setFavorites(items);
  };

  const isFavorite = (id: number) => {
    const item = favorites.find((item) => item.product_id === id);
    return item ? item.id : 0;
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, storeFavorites, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = (): FavoritesContextType => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
