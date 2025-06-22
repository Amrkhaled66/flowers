import FavoriteButton from "src/components/ui/ProductCard/FavoriteButton";
import { Icon } from "@iconify/react/dist/iconify.js";
const ActionButtons = ({
  id,
  onShowImagesSlider,
}: {
  id: number;
  onShowImagesSlider: () => void;
}) => {
  return (
    <>
      <div className="absolute top-2 right-2 z-10">
        <FavoriteButton productId={id} />
      </div>

      <button
        onClick={onShowImagesSlider}
        className="animate absolute right-2 bottom-2 z-10 rounded-xl bg-white p-2.5 hover:drop-shadow-xl"
      >
        <Icon icon="lets-icons:full-alt" width="24" height="24" />
      </button>
    </>
  );
};

export default ActionButtons;
