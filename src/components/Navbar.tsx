// src/components/Navbar.tsx
import React, { useState, useEffect } from 'react'; // useState ve useEffect import edin
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const { cartItems } = useCart();
  const [displayedItemCount, setDisplayedItemCount] = useState(0); // Başlangıçta 0

  useEffect(() => {
    // Bu useEffect sadece client tarafında çalışır
    setDisplayedItemCount(cartItems.reduce((acc, item) => acc + item.quantity, 0));
  }, [cartItems]); // cartItems değiştiğinde güncellenir

  return (
    <nav className={styles.navbar}>
      <div className={`${styles.container} ${styles.navbarContent}`}>
        <Link href="/" className={styles.navbarBrand}>
          Kahve Dükkanı
        </Link>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navItem}>
              Ana Sayfa
            </Link>
          </li>
          <li>
            <Link href="/products" className={styles.navItem}>
              Ürünler
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navItem}>
              Hakkımızda
            </Link>
          </li>
          <li>
            {/* itemCount'u doğrudan Link içine yerleştirin, fazla etiketlerden kaçının */}
            <Link href="/cart" className={styles.navItem}>
              Sepet ({displayedItemCount}) {/* displayedItemCount kullanın */}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;