// src/pages/checkout.tsx
import Head from 'next/head';
import { useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { useRouter } from 'next/router';
import styles from '../styles/Checkout.module.css'; // CSS Modülünü import ediyoruz

export default function CheckoutPage() {
  const { clearCart } = useCart();
  const router = useRouter();

  useEffect(() => {
    clearCart();
  }, []);

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <div>
      <Head>
        <title>Ödeme Sonucu</title>
        <meta name="description" content="Ödeme İşlemi" />
      </Head>

      <main className={styles.mainContent}>
        <h1>Ödeme Başarılı!</h1>
        <p>Siparişiniz için teşekkür ederiz. Kahveniz en kısa sürede hazırlanacaktır.</p>

        <button
          onClick={handleGoHome}
          className={styles.homeButton}
        >
          Ana Sayfaya Dön
        </button>
      </main>
    </div>
  );
}