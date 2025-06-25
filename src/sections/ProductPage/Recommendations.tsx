import Product from "src/types/product";

import Slider from "src/components/HomePage/Categories/Slider";
import { SwiperSlide } from "swiper/react";
import Button from "src/components/ui/Button";
import priceFormatter from "src/utils/priceFormatter";
import { Icon } from "@iconify/react/dist/iconify.js";
import { getLocalizedName } from "src/utils/getLocalizedName";

import { useTranslation } from "react-i18next";
import { useAddToCart, useUpdateCart } from "src/hooks/cart/useCartMutations";
import { useCart } from "src/context/user/cartCtx";
import { useAuthGuard } from "src/hooks/shared/useAuthGuard";

const RecommendedProduct = ({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: number;
}) => (
  <div className="flex flex-col gap-y-3 overflow-hidden">
    <div className="size-[145px] overflow-hidden rounded-xl">
      <img
        className="size-full object-cover object-center drop-shadow-xl"
        src={image}
        alt={name}
      />
    </div>
    <div className="text-center font-bold">
      <p>{name}</p>
      <p>{price}</p>
    </div>
  </div>
);

const Recommendations = ({
  products,
  mainProductName,
  mainProductImage,
  mainProductId,
  mainProductPrice,
}: {
  products: Product[];
  mainProductName: string | null;
  mainProductImage: string;
  mainProductId: string;
  mainProductPrice: number;
}) => {
  const { t } = useTranslation("productPage");
  const { mutate, isPending: isAddPending } = useAddToCart();
  const { mutate: updateCart, isPending: isUpdatePending } = useUpdateCart();
  const { cartProduct } = useCart();
    const { check } = useAuthGuard();
  

  const handleAddToCart = async (ids: number[]) => {
    const isAuthenticated = await check();
    if (!isAuthenticated) return;
    await Promise.all(
      ids.map(async (id) => {
        const existingProduct = cartProduct(id);

        if (existingProduct) {
          updateCart({
            id: existingProduct.id,
            quantity: existingProduct.quantity + 1,
          });
        } else {
          mutate(id);
        }
      }),
    );
  };

  return (
    <div className="space-y-4 sm:space-y-5 lg:space-y-6 lg:py-10">
      <h2 className="text-2xl font-bold">{t("recommendations")}</h2>

      <Slider slidesPerGroup={1} items={products}>
        {products.map((product) => (
          <>
            <SwiperSlide
              key={product.id}
              className="!w-[90%] sm:!w-[45%] lg:!w-[28%]"
            >
              <div className="animate flex flex-col gap-y-4 rounded-xl bg-[#EEECEE] p-4 hover:cursor-pointer hover:drop-shadow-xl">
                <div className="flex items-center justify-between">
                  <RecommendedProduct
                    image={product.firstImage || ""}
                    name={getLocalizedName(product)}
                    price={product.afterDiscount}
                  />
                  <Icon icon={"ic:round-plus"} className="size-6" />
                  <RecommendedProduct
                    image={mainProductImage}
                    name={mainProductName || ""}
                    price={product.afterDiscount}
                  />
                </div>
                <Button
                  loading={isAddPending || isUpdatePending}
                  className="!px-0 !py-4 !text-base text-white"
                  icon={<Icon icon="ic:outline-add-shopping-cart" />}
                  text={`${t("addBoth")} ${priceFormatter(
                    product.afterDiscount + mainProductPrice,
                  )}`}
                  onClick={async () =>
                    await handleAddToCart([product.id, Number(mainProductId)])
                  }
                />
              </div>
            </SwiperSlide>
          </>
        ))}
      </Slider>
    </div>
  );
};

export default Recommendations;
