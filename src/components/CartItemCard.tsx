// src/components/CartItemCard.tsx
import React, { memo } from 'react'; // 'memo'yu import ettik
import { useCart } from '@/context/CartContext';
import styles from './CartItemCard.module.css';

type Coffee = {
  id: number;
  name: string;
  price: number;
};

type CartItem = Coffee & {
  quantity: number;
};

type CartItemCardProps = {
  item: CartItem;
};

// CartItemCard bileşenini React.memo ile sarmalıyoruz
const CartItemCard: React.FC<CartItemCardProps> = memo(({ item }) => { // memo kullanıldı
  const { removeFromCart, updateCartItemQuantity } = useCart(); // Bu fonksiyonlar da context'ten geldiği için stabil kabul edilebilir.

  console.log(`CartItemCard (${item.name}) rendered`); // Render sayısını görmek için eklendi

  return (
    <li className={styles.cartItem}>
      <span>
        {item.name} - {item.price}₺ x {item.quantity} = {item.price * item.quantity}₺
      </span>
      <div>
        <button onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)} className={styles.quantityButton}>-</button>
        <button onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)} className={styles.quantityButton}>+</button>
        <button onClick={() => removeFromCart(item.id)} className={styles.removeButton}>Sil</button>
      </div>
    </li>
  );
}); // memo() ile kapatıldı

export default CartItemCard;