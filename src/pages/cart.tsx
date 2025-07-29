// src/pages/cart.tsx
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from '../styles/Cart.module.css';
import CartItemCard from '@/components/CartItemCard';

export default function CartPage() {
  const { cartItems, getCartTotal } = useCart();

  return (
    <div>
      <Head>
        <title>Sepetim</title>
        <meta name="description" content="Sepetinizdeki ürünler" />
      </Head>

      <main className={styles.mainContent}>
        <h1>Sepetim</h1>
        {cartItems.length === 0 ? (
          <p className={styles.emptyCartMessage}>
            Sepetinizde ürün bulunmamaktadır. <Link href="/products">Ürünlerimize göz atın!</Link>
          </p>
        ) : (
          <div>
            <ul className={styles.cartList}>
              {/* Buradaki map ve return yapısını kontrol edin */}
              {cartItems.map((item) => ( // Bu parantez map fonksiyonunun arrow function'ını başlatır ve JSX döndüreceğini belirtir
                <CartItemCard key={item.id} item={item} />
              ))} {/* Bu parantez map fonksiyonunun arrow function'ını ve map çağrısını kapatır */}
            </ul>
            <h2 className={styles.cartTotal}>Toplam: {getCartTotal()}₺</h2>
            <Link href="/checkout">
              <button className={styles.checkoutButton}>Ödemeye Geç</button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}