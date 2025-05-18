import EmptyFavorites from "src/sections/ProfilePage/Favorites/EmptyFavorites";
import FavoritesCards from "src/sections/ProfilePage/Favorites/FavoritesCards";

import { useGetFavorites } from "src/hooks/profile/favorites/FavoritesMutations";
import { useTranslation } from "react-i18next";

const Favorites = () => {
  const { data, isLoading } = useGetFavorites();
  const { t } = useTranslation("profile");

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
