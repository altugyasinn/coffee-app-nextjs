// src/components/ProductCard.tsx
import React from 'react';
import { useCart, CartItem } from '@/context/CartContext'; // CartItem'ı da import edin
import styles from './ProductCard.module.css'; // Yolun doğru olduğundan emin olun

interface ProductCardProps {
  product: Omit<CartItem, 'quantity'>;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart(); // addToCart yerine addItem kullanın

  const handleAddToCart = () => {
    addItem(product, 1); // addToCart yerine addItem çağrısını yapın
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image} alt={product.name} className={styles.productImage} />
      <h3 className={styles.productName}>{product.name}</h3>
      <p className={styles.productPrice}>{product.price}₺</p>
      <button onClick={handleAddToCart} className="btn btn-primary">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;