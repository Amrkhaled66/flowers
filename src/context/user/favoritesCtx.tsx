import React, { createContext, useState, useContext } from "react";

type FavoritesContextType = {
  favorites: number[];
  storeFavorites: (ids: number[]) => void;
  isFavorite: (id: number) => boolean
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined,
);

export const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favorites, setFavorites] = useState<number[]>([]);

  const storeFavorites = (ids: number[]) => {
    console.log("storeFavorites", ids);
    setFavorites(ids);
  };

  const isFavorite = (id: number) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, storeFavorites ,isFavorite}}>
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
