import React, { createContext, useContext, useState, useCallback } from "react";
import { CartItem } from "src/types/cart";
import getMainPrice from "src/utils/getMainPrice";
import transformProduct from "src/utils/transforms/transformProduct";

interface Coupon {
  code: string;
  discount: number; // percent, e.g., 12 for 12%
}

interface CartContextType {
  cart: CartItem[] | [];
  storeCart: (cart: CartItem[] | []) => void;
  clearCart: () => void;
  isProductInCart: (productId: number) => boolean;
  cartTotal?: number;
  cartLength?: number;
  coupon: Coupon | null;
  applyCoupon: (code: string, discount: number) => void;
  removeCoupon: () => void;
  discountValue: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[] | []>([]);
  const [coupon, setCoupon] = useState<Coupon | null>(null);

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
    return cart?.some((item: CartItem) => item.id === productId);
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

  const cartTotal = coupon?.code
    ? baseTotal - (baseTotal * coupon.discount) / 100
    : baseTotal;

  const cartLength = cart?.reduce((total: number, item: CartItem) => {
    return total + item.quantity;
  }, 0);

  const discountValue = cartTotal - baseTotal;

  return (
    <CartContext.Provider
      value={{
        cart,
        storeCart,
        clearCart,
        isProductInCart,
        cartTotal,
        cartLength,
        coupon,
        applyCoupon,
        removeCoupon,
        discountValue,
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
