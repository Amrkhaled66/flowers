import React, { createContext, useContext, useState, useCallback } from "react";
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
  isBalanceUsed: boolean
  setIsBalanceUsed: (value: boolean) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[] | []>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);
  const [isBalanceUsed, setIsBalanceUsed] = useState(false)
  const { authData: { user } } = useAuth()
  const storeCart = useCallback((newCart: CartItem[]) => {
    const modifiedCart = newCart.map((item) => ({
      quantity: item.quantity,
      id: item.id,
      product: transformProduct(item.product),
    }));
    setCart(modifiedCart);
  }, []);

  const clearCart = () => {
    setCart([]);
    setCoupon(null);
  };

  const isProductInCart = (productId: number) => {
    const item = (cart?.find((item: CartItem) => item.product.id === productId));
    return item ? item.id : false;
  };

  const applyCoupon = (code: string, discount: number) => {
    setCoupon({ code, discount });
  };

  const removeCoupon = () => {
    setCoupon(null);
  };

  const baseTotal = cart?.reduce((total: number, item: CartItem) => {
    return total + getMainPrice(item.product) * item.quantity;
  }, 0);

  let cartSubTotal = coupon?.code
    ? baseTotal - (baseTotal * coupon.discount) / 100
    : baseTotal;

  cartSubTotal = isBalanceUsed ? (cartSubTotal - Number(user?.balance)) || 0 : cartSubTotal

  const cartLength = cart?.reduce((total: number, item: CartItem) => {
    return total + item.quantity;
  }, 0);

  const copounValue = cartSubTotal - baseTotal;

  const isFreeDelivery = cartSubTotal >= FREEDELIVERYBRECKDOWN;

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
        isFreeDelivery: isFreeDelivery,
        setIsBalanceUsed,
        isBalanceUsed
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
