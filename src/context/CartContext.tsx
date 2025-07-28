// src/context/CartContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";

type Coffee = {
  id: number;
  name: string;
  price: number;
};

type CartContextType = {
  cartItems: Coffee[];
  addToCart: (item: Coffee) => void;
  // Sepetten silme veya miktar değiştirme gibi fonksiyonları buraya ekleyebilirsiniz
  // removeFromCart: (id: number) => void;
  // updateCartItemQuantity: (id: number, quantity: number) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<Coffee[]>([]);

  const addToCart = (item: Coffee) => {
    setCartItems((prev) => {
      // Eğer aynı üründen varsa sadece miktarını artırabiliriz
      // Bu örnekte sadece eklemeye devam ediyoruz, siz daha karmaşık bir mantık ekleyebilirsiniz
      return [...prev, item];
    });
  };
  
  // Sepetten ürün silme fonksiyonu (isteğe bağlı)
  // const removeFromCart = (id: number) => {
  //   setCartItems((prev) => prev.filter(item => item.id !== id));
  // };

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};