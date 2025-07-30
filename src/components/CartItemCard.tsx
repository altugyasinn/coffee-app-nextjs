// src/components/CartItemCard.tsx
import React from 'react';
import { useCart, CartItem } from '@/context/CartContext'; // CartItem'ı da import edin
import styles from './CartItemCard.module.css';

interface CartItemCardProps {
  item: CartItem; // CartItem tipini CartContext'ten alın
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item }) => {
  const { removeItem, updateQuantity } = useCart(); // removeItem kullanın

  const handleRemoveItem = () => {
    removeItem(item.id); // removeItem'ı çağır
  };

  const handleDecreaseQuantity = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeItem(item.id);
    }
  };

  const handleIncreaseQuantity = () => {
    updateQuantity(item.id, item.quantity + 1);
  };

  return (
    <li className={styles.cartItem}>
      <img src={item.image} alt={item.name} className={styles.itemImage} />
      <div className={styles.itemDetails}>
        <span className={styles.itemName}>{item.name}</span>
        <span className={styles.itemPrice}>{item.price}₺</span>
      </div>
      <div className={styles.quantityControl}>
        <button onClick={handleDecreaseQuantity} className={styles.quantityBtn}>-</button>
        <span className={styles.itemQuantity}>{item.quantity}</span>
        <button onClick={handleIncreaseQuantity} className={styles.quantityBtn}>+</button>
      </div>
      <span className={styles.itemTotal}>{(item.price * item.quantity).toFixed(2)}₺</span>
      <button onClick={handleRemoveItem} className={`${styles.removeBtn} btn btn-danger`}>Sil</button>
    </li>
  );
};

export default CartItemCard;