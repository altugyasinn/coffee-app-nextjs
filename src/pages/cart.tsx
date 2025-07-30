// src/pages/cart.tsx
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from '@/styles/Cart.module.css';
import CartItemCard from '@/components/CartItemCard';

export default function CartPage() {
  const { cartItems, getTotalPrice } = useCart(); // getTotal yerine getTotalPrice

  return (
    <>
      <Head>
        <title>Sepetim</title>
        <meta name="description" content="Sepetinizdeki ürünler" />
      </Head>

      <main className={styles.mainContent}>
        <h1 className="h1">Sepetim</h1>
        {cartItems.length === 0 ? (
          <p className={styles.emptyCartMessage}>
            Sepetinizde ürün bulunmamaktadır. <Link href="/products">Ürünlerimize göz atın!</Link>
          </p>
        ) : (
          <div>
            <ul className={styles.cartList}>
              {cartItems.map(item => (
                <CartItemCard key={item.id} item={item} />
              ))}
            </ul>
            <h2 className={styles.cartTotal}>Toplam: {getTotalPrice()}₺</h2> {/* getTotalPrice kullanın */}
            <Link href="/checkout" className={`${styles.checkoutButton} btn btn-primary`}>
              Ödemeye Geç
            </Link>
          </div>
        )}
      </main>
    </>
  );
}