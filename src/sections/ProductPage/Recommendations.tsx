import Product from "src/types/product";

import Slider from "src/components/HomePage/Categories/Slider";
import { SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import ProductCard from "src/components/ui/ProductCard/ProductCard";
// import ima from "src/assets/products/1.webp"

// const dummyProduct: Product = {
//   id: 1,
//   images: [
//     ima,
//     ima
//   ],
//   firstImage: ima,
//   nameAr: "منتج تجريبي",
//   nameEn: "Sample Product",
//   descriptionAr: "هذا وصف تجريبي للمنتج.",
//   descriptionEn: "This is a sample product description.",
//   beforeDiscount: 100,
//   discountPercentage: 20,
//   afterDiscount: 80,
//   stock: 50,
//   bestSelling: true,
//   slug: "sample-product",
//   categoryId: 101,
//   occasionId: 201,
//   recommendedProducts: [
//     {
//       id: 2,
//       images: [
//         ima
//       ],
//       firstImage: ima,
//       nameAr: "منتج موصى به",
//       nameEn: "Recommended Product",
//       descriptionAr: "وصف المنتج الموصى به.",
//       descriptionEn: "Recommended product description.",
//       beforeDiscount: 120,
//       discountPercentage: 25,
//       afterDiscount: 90,
//       stock: 30,
//       bestSelling: false,
//       slug: "recommended-product",
//       categoryId: 101,
//       occasionId: 202,
//     }
//   ]
// }
const Recommendations = ({ products }: { products: Product[] }) => {
  const { t } = useTranslation("productPage");
  return (
    <div className="space-y-4  sm:space-y-5 lg:space-y-6 lg:py-10">
      <h2 className="text-2xl font-bold">{t("recommendations")}</h2>

      <Slider>
        {
          products.map((product) => (
            <SwiperSlide key={product.id} className="!w-[60%] sm:!w-[45%] lg:!w-1/4">
              <ProductCard product={product} />
            </SwiperSlide>
          ))
        }
      </Slider>
    </div>)

};

export default Recommendations;
