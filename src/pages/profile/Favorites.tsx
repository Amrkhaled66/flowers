import EmptyFavorites from "src/sections/ProfilePage/Favorites/EmptyFavorites";
import FavoritesCards from "src/sections/ProfilePage/Favorites/FavoritesCards";
import transformProduct from "src/utils/transforms/transformProduct";
import ProfilePageCompetent from "src/components/ProfilePage/ProfilePageCompetent";
import { useFavorites } from "src/context/user/favoritesCtx";
const Favorites = () => {
  const { favorites } = useFavorites();


  if (!favorites || favorites.length === 0) return <EmptyFavorites />;
  const transformedProduct = favorites.map((item: any) =>
    transformProduct(item.product),
  );

  return (
    <ProfilePageCompetent>
      <FavoritesCards products={transformedProduct} />
    </ProfilePageCompetent>
  );
};

export default Favorites;
