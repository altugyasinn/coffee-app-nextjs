// src/components/Navbar.tsx
import Link from 'next/link';
import { useCart } from '@/context/CartContext'; // Sepetteki ürün sayısını göstermek için

const Navbar = () => {
  const { cartItems } = useCart(); // Sepet öğelerini alıyoruz

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-around', padding: '1rem', backgroundColor: '#eee' }}>
      <Link href="/">Ana Sayfa</Link>
      <Link href="/about">Hakkımızda</Link>
      <Link href="/products">Ürünler</Link>
      <Link href="/cart">
        Sepet ({cartItems.length}) {/* Sepetteki ürün sayısını göster */}
      </Link>
    </nav>
  );
};

export default Navbar;