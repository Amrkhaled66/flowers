import EmptyFavorites from "src/sections/ProfilePage/Favorites/EmptyFavorites";
import FavoritesCards from "src/sections/ProfilePage/Favorites/FavoritesCards";

import { products1 } from "src/data/products";

import { useGetFavorites } from "src/hooks/profile/favorites/FavoritesMutations";

const Favorites = () => {
  const { data, isLoading } = useGetFavorites();

  if (isLoading) return null;
  return (
    <div>
      {data.data.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <FavoritesCards products={data.data} />
      )}
    </div>
  );
};

export default Favorites;
