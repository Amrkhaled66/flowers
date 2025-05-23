import EmptyFavorites from "src/sections/ProfilePage/Favorites/EmptyFavorites";
import FavoritesCards from "src/sections/ProfilePage/Favorites/FavoritesCards";
import transformProduct from "src/utils/transforms/transformProduct";

import { useGetFavorites } from "src/hooks/profile/favorites/FavoritesMutations";
const Favorites = () => {
  const { data, isLoading } = useGetFavorites();

  if (isLoading) return null;

  if (!data || data.data.length === 0) return <EmptyFavorites />;
  const transformedProduct = data.data.map((item:any) =>
    transformProduct(item.product),
  );
  return (
    <div>
      <FavoritesCards products={transformedProduct} />
    </div>
  );
};

export default Favorites;
