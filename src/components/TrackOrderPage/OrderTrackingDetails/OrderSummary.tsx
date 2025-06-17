import { useTranslation } from "react-i18next";
import priceFormatter from "src/utils/priceFormatter";
import { ReceivedProduct } from "src/types/ReceivedOrder";
import { getLocalizedName } from "src/utils/getLocalizedName";

const ProductDiv = ({ product }: { product: ReceivedProduct }) => {
  const name = getLocalizedName(product)
  return (
    <div className="flex items-start gap-x-3">
      <img
        src={product.firstImage}
        alt={name}
        className="w-20  aspect-square rounded-xl"
      />
      <div className="flex flex-col gap-y-2">
        <span>{name}</span>
        <span className="font-bold">{priceFormatter(product.price)}</span>
        <span>Qty: {product.quantity}</span>
      </div>
    </div>
  );
};

const OrderSummary = ({ products, subTotal, total, shipping }: { products: ReceivedProduct[] | null, subTotal: string | null, total: string | null, shipping: string | null }) => {
  const { t } = useTranslation("trackOrder");
  return (
    <div className="bg-main-50 space-y-6 rounded-xl p-4">
      <div className="space-y-7">
        <h2 className="font-bold">{t("summary.title")}</h2>
        <div className="space-y-4">
          {products &&
            products.map((product) => (
              <ProductDiv key={product.id} product={product} />
            ))
          }
        </div>
      </div>
      <div className="border-b-stroke flex justify-between border-b pb-4">
        <p>{t("summary.subtotal")}</p>
        <p>{priceFormatter(subTotal)}</p>
      </div>
      <div className="border-b-stroke space-y-2 border-b pb-4">
        <p className="flex justify-between">
          <span>{t("summary.deliveryCharges")}</span>
          <span>{priceFormatter(shipping)}</span>
        </p>
        <p className="lg:w-[80%]">{t("summary.chargeNote")}</p>
      </div>
      <p className="flex justify-between font-bold">
        <span>{t("summary.total")}</span>
        <span>{priceFormatter(total)}</span>
      </p>
    </div>
  );
};

export default OrderSummary;
