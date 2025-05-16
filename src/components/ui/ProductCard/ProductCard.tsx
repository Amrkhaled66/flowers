// import { Link } from "react-router-dom";
// import { Icon } from "@iconify/react/dist/iconify.js";
// import Alert from "../Alert";

// import {
//   useAddFavorite,
//   useRemoveFavorite,
// } from "src/hooks/profile/favorites/FavoritesMutations";
// import { useAuth } from "src/context/authCtx";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// const ProductCard = ({
//   img,
//   name,
//   price,
//   isFavorite = false,
// }: {
//   img: string;
//   name: string;
//   price: number;
//   isFavorite?: boolean;
// }) => {
//   const { isAuthenticated } = useAuth();
//   const { mutate, isPending } = useAddFavorite();
//   const { mutate: removeFavorite, isPending: isRemovePending } =
//     useRemoveFavorite();
//   const navigate = useNavigate();

//   const handleAddFavorite = () => {
//     if (!isAuthenticated)
//       return Alert({
//         title: "Warning",
//         text: "Please login first",
//         icon: "warning",
//         confirmButtonText: "Login",
//       }).then(() => navigate("/signin"));

//     const id = "d";
//     mutate(id, {
//       onSuccess: () => {
//         toast("Added to favorites", {
//           type: "success",
//         });
//       },
//     });
//   };

//   const handleRemoveFavorite = () => {
//     const id = "d";
//     removeFavorite(id, {
//       onSuccess: () => {
//         toast("Removed from favorites", {
//           type: "success",
//         });
//       },
//     });
//   };
//   return (
//     <Link to={`/product/${name}`}>
//       <div className="border-stroke w-full overflow-hidden rounded-2xl border bg-white drop-shadow-sm">
//         <button
//           onClick={isFavorite ? handleRemoveFavorite : handleAddFavorite}
//           className="group absolute start-2 top-2 rounded-xl bg-white p-2.5"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="24"
//             height="24"
//             viewBox="0 0 24 24"
//             className={`stroke-main group-hover:fill-main fill-none stroke-2 ${isFavorite && "fill-main"} `}
//           >
//             <path
//               d="M12 20C12 20 21 16 21 9.71405C21 6 18.9648 4 16.4543 4C15.2487 4 14.0925 4.49666 13.24 5.38071L12.7198 5.92016C12.3266 6.32798 11.6734 6.32798 11.2802 5.92016L10.76 5.38071C9.90749 4.49666 8.75128 4 7.54569 4C5 4 3 6 3 9.71405C3 16 12 20 12 20Z"
//               stroke="#231D25"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </button>
//         <div
//           className={`h-[140px] ${isFavorite && "h-[310px] sm:!h-[195px] lg:!h-[282px]"} sm:h-[310px] lg:h-[282px]`}
//         >
//           <img
//             src={img}
//             loading="lazy"
//             alt="img"
//             className="size-full object-cover object-center"
//           />
//         </div>
//         <div className="space-y-3 p-2 sm:p-3 lg:p-4">
//           <div className="">
//             <p
//               className={`text-text-main line-clamp-4 ${isFavorite && "!text-xl font-bold"} text-left text-xs font-bold sm:text-xl lg:w-[90%] lg:text-base`}
//             >
//               {name}
//             </p>
//           </div>

//           <div className="flex flex-row items-center justify-between gap-y-3">
//             <div className="flex w-full justify-start">
//               <p className="text-text-main font-bold">
//                 <span className="mr-1 text-left text-xs font-normal lg:text-center lg:text-base">
//                   AED
//                 </span>
//                 {price}
//               </p>
//               {/* {discountedPrice && discountedPrice > 0 && (
//             <p className="text-text-main font-bold">{discountedPrice}</p>
//           )} */}
//             </div>
//             <button className="hover:bg-main-300 animate bg-main flex place-items-center rounded-full p-2 text-white sm:p-3 lg:p-4">
//               <Icon
//                 icon="material-symbols:shopping-cart-outline-rounded"
//                 width="24"
//                 height="24"
//               />
//             </button>
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// };

import ProductCardUI from "./ProductCardUI";
import FavoriteButton from "./FavoriteButton";

const ProductCard = ({
  img,
  name,
  price,
  isFavorite = false,
}: {
  img: string;
  name: string;
  price: number;
  isFavorite?: boolean;
}) => {
  return (
    <ProductCardUI img={img} name={name} price={price} isFavorite={isFavorite}>
      <FavoriteButton isFavorite={isFavorite} productId={"d"} />
    </ProductCardUI>
  );
};

export default ProductCard;
