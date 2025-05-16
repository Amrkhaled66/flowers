import { useFavoriteHandler } from "src/hooks/profile/favorites/useFavoriteHandler";

const FavoriteButton = ({
  isFavorite,
  productId,
}: {
  isFavorite: boolean;
  productId: string;
}) => {
  const { handleToggleFavorite, isPending } = useFavoriteHandler(productId);

  return (
    <button
      onClick={handleToggleFavorite}
      disabled={isPending}
      className="group rounded-xl absolute top-2 start-2 bg-white p-2.5"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`stroke-main group-hover:fill-main fill-none stroke-2 ${isFavorite && "fill-main"} `}
      >
        <path
          d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z"
          stroke="#231D25"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
export default FavoriteButton;
