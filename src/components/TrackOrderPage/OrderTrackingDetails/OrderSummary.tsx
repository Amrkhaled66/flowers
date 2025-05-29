import { useTranslation } from "react-i18next";
import priceFormatter from "src/utils/priceFormatter";

import img from "src/assets/products/2.webp";
const product = {
  id: "1",
  name: "Flower Bouquet",
  price: 50,
  quantity: 2,
  img: img,
};

const ProductDiv = ({ product }) => {
  return (
    <div className="flex items-start gap-x-3">
      <img
        src={product.img}
        alt={product.name}
        className="h-full w-20 rounded-xl"
      />
      <div className="flex flex-col gap-y-2">
        <span>{product.name}</span>
        <span className="font-bold">{priceFormatter(product.price)}</span>
        <span>Qty: {product.quantity}</span>
      </div>
    </div>
  );
};

const OrderSummary = () => {
  const { t } = useTranslation("trackOrder");
  return (
    <div className="bg-main-50 space-y-6 rounded-xl p-4">
      <div className="space-y-7">
        <h2 className="font-bold">{t("summary.title")}</h2>
        <div className="space-y-4">
          <ProductDiv product={product} />
          <ProductDiv product={product} />
          <ProductDiv product={product} />
          <ProductDiv product={product} />
        </div>
      </div>
      <div className="border-b-stroke flex justify-between border-b pb-4">
        <p>{t("summary.subtotal")}</p>
        <p>{priceFormatter(3423)}</p>
      </div>
      <div className="border-b-stroke space-y-2 border-b pb-4">
        <p className="flex justify-between">
          <span>{t("summary.deliveryCharges")}</span>
          <span>{priceFormatter(3423)}</span>
        </p>
        <p className="lg:w-[80%]">{t("summary.chargeNote")}</p>
      </div>
      <p className="flex justify-between font-bold">
        <span>{t("summary.total")}</span>
        <span>{priceFormatter(2342)}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
