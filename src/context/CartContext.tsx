// src/context/CartContext.tsx
import { createContext, useContext, useState, useEffect, ReactNode } from "react"; // useEffect'i de import ettik

type Coffee = {
  id: number;
  name: string;
  price: number;
};

// Sepet öğesi tipi: Ürünün kendisi ve adedi
type CartItem = Coffee & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (item: Coffee) => void;
  removeFromCart: (id: number) => void;
  updateCartItemQuantity: (id: number, newQuantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // Sepet öğelerini localStorage'dan yükle veya boş bir dizi ile başlat
  // useState'in başlatıcısı olarak bir fonksiyon kullanmak, sadece ilk render'da çalışmasını sağlar.
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    // Sunucu tarafında (SSR) veya Node.js ortamında çalışırken 'window' objesi bulunmayabilir.
    // Bu yüzden 'typeof window !== 'undefined'' kontrolü önemlidir.
    if (typeof window !== 'undefined') {
      try {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
        return []; // Hata durumunda boş sepetle başla
      }
    }
    return []; // Tarayıcı ortamı değilse boş sepetle başla
  });

  // cartItems her değiştiğinde localStorage'a kaydet
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    }
  }, [cartItems]); // cartItems bağımlılığı sayesinde her değiştiğinde bu effect çalışır

  const addToCart = (item: Coffee) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        // Ürün sepette varsa miktarını artır
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // Ürün sepette yoksa yeni olarak ekle
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateCartItemQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(id); // Miktar 0 veya altına düşerse ürünü kaldır
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        clearCart,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};