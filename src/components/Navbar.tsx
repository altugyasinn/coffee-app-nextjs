// src/components/Navbar.tsx
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css'; // CSS Modülünü import ediyoruz

const Navbar = () => {
  const { cartItems } = useCart();

  return (
    <nav className={styles.nav}> {/* class'ı uyguluyoruz */}
      <Link href="/">Ana Sayfa</Link>
      <Link href="/about">Hakkımızda</Link>
      <Link href="/products">Ürünler</Link>
      <Link href="/cart">
        Sepet ({cartItems.length})
      </Link>
    </nav>
  );
};

export default Navbar;