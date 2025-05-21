import Product from "src/types/product";

const getMainPrice = (product: Product) => {
  return !product.afterDiscount || product.afterDiscount === 0
    ? product.beforeDiscount
    : product.afterDiscount;
};
export default getMainPrice;
