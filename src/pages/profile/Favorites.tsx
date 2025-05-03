import EmptyFavorites from "src/sections/ProfilePage/Favorites/EmptyFavorites";
import FavoritesCards from "src/sections/ProfilePage/Favorites/FavoritesCards";

import { products1 } from "src/data/products";

const Favorites = () => {
  return (
    <div>
      {products1.length === 0 ? <EmptyFavorites /> : <FavoritesCards products={products1} />}
    </div>
  );
};

export default Favorites;
