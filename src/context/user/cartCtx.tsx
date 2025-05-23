import React, { createContext, useContext, useState } from "react";
import { CartItem } from "src/types/cart";
import getMainPrice from "src/utils/getMainPrice";
import transformProduct from "src/utils/transforms/transformProduct";

import { useCallback } from "react";
interface CartContextType {
  cart: CartItem[] | [];
  storeCart: (cart: CartItem[] | []) => void;
  clearCart: () => void;
  isProductInCart: (productId: number) => boolean;
  cartTotal?: number;
  cartLength?: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[] | []>([]);

  const storeCart = useCallback((newCart :CartItem[]) => {
    const modifiedCart = newCart.map((item) => {
      return {
        quantity: item.quantity,
        id: item.id,
        product: transformProduct(item.product),
      };
    });
    setCart(modifiedCart);
  },[]);


  const clearCart = () => {
    setCart([]);
  };

  const isProductInCart = (productId: number) => {
    if (!cart || cart.length === 0) return false;
    return cart.some((item: CartItem) => item.id === productId);
  };

  const cartTotal = cart?.reduce((total: number, item: CartItem) => {
    return total + getMainPrice(item.product) * item.quantity;
  }, 0);

  const cartLength = cart?.reduce((total: number, item: CartItem) => {
    return total + item.quantity;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        storeCart,
        clearCart,
        isProductInCart,
        cartTotal,
        cartLength,
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
