// src/components/ProductCard.tsx
import React, { memo } from 'react'; // 'memo'yu import ettik
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

type Coffee = {
  id: number;
  name: string;
  price: number;
};

type ProductCardProps = {
  coffee: Coffee;
};

// ProductCard bileşenini React.memo ile sarmalıyoruz
const ProductCard: React.FC<ProductCardProps> = memo(({ coffee }) => { // memo kullanıldı
  const { addToCart } = useCart(); // addToCart fonksiyonu context'ten geldiği için zaten stabil kabul edilebilir.

  console.log(`ProductCard (${coffee.name}) rendered`); // Render sayısını görmek için eklendi

  return (
    <li className={styles.productItem}>
      <h3>{coffee.name}</h3>
      <p>Fiyat: {coffee.price}₺</p>
      <button onClick={() => addToCart(coffee)} className={styles.addToCartButton}>Sepete Ekle</button>
    </li>
  );
}); // memo() ile kapatıldı

export default ProductCard;