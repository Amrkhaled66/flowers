import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useMemo,
} from "react";
import { CartItem } from "src/types/cart";
import getMainPrice from "src/utils/getMainPrice";
import transformProduct from "src/utils/transforms/transformProduct";
import { FREEDELIVERYBRECKDOWN } from "src/utils/defaultSettings";
import { useAuth } from "../authCtx";

interface Coupon {
  code: string;
  discount: number;
}

interface CartContextType {
  cart: CartItem[] | [];
  storeCart: (cart: CartItem[] | []) => void;
  clearCart: () => void;
  isProductInCart: (productId: number) => boolean | number;
  cartSubTotal?: number;
  cartLength?: number;
  coupon: Coupon | null;
  applyCoupon: (code: string, discount: number) => void;
  removeCoupon: () => void;
  copounValue: number;
  isFreeDelivery: boolean;
  isBalanceUsed: boolean;
  setIsBalanceUsed: (value: boolean) => void;
  getProductQuantity: (id: number) => number;
  cartProduct: (id: number) => CartItem | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [isBalanceUsed, setIsBalanceUsed] = useState(false);

  const {
    authData: { user },
  } = useAuth();

  const storeCart = useCallback((newCart: CartItem[]) => {
    const modifiedCart = newCart.map((item) => ({
      quantity: item.quantity,
      id: item.id,
      product: transformProduct(item.product),
    }));
    setCart(modifiedCart);
  }, []);

  const clearCart = useCallback(() => {
    setCart([]);
    setCoupon(null);
  }, []);

  const isProductInCart = useCallback(
    (productId: number) => {
      const item = cart.find((item) => item.product.id === productId);
      return item ? item.id : false;
    },
    [cart],
  );

  const applyCoupon = useCallback((code: string, discount: number) => {
    setCoupon({ code, discount });
  }, []);

  const removeCoupon = useCallback(() => {
    setCoupon(null);
  }, []);

  const getProductQuantity = useCallback(
    (id: number) => cart.find((item) => item.product.id === id)?.quantity || 0,
    [cart],
  );

  const cartProduct = useCallback(
    (id: number) => cart.find((item) => item.product.id === id),
    [cart],
  );

  const baseTotal = useMemo(
    () =>
      cart.reduce(
        (total, item) => total + getMainPrice(item.product) * item.quantity,
        0,
      ),
    [cart],
  );

  const cartSubTotal = useMemo(() => {
    let subtotal = coupon
      ? baseTotal - (baseTotal * coupon.discount) / 100
      : baseTotal;

    if (isBalanceUsed) {
      subtotal -= Number(user?.balance || 0);
    }

    return subtotal;
  }, [baseTotal, coupon, isBalanceUsed, user]);

  const cartLength = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  const copounValue = useMemo(
    () => baseTotal - cartSubTotal,
    [baseTotal, cartSubTotal],
  );

  const isFreeDelivery = useMemo(
    () => cartSubTotal >= FREEDELIVERYBRECKDOWN,
    [cartSubTotal],
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        storeCart,
        clearCart,
        isProductInCart,
        cartSubTotal,
        cartLength,
        coupon,
        applyCoupon,
        removeCoupon,
        copounValue,
        isFreeDelivery,
        setIsBalanceUsed,
        isBalanceUsed,
        getProductQuantity,
        cartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
