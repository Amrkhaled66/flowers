import React, { createContext, useState, useContext } from "react";

type FavoritesContextType = {
  favorites: string[];
  storeFavorites: (ids: string[]) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const storeFavorites = (ids: string[]) => {
    setFavorites(ids);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, storeFavorites }}>
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
