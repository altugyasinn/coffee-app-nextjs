// src/pages/checkout.tsx
import Head from 'next/head';
import { useEffect } from 'react';
// useRouter burada kullanılmasa da, varlığı sorun yaratmaz
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import styles from '@/styles/Checkout.module.css';

import Link from 'next/link'; // Link bileşeni import edildi

const CheckoutPage: React.FC = () => {
  const { clearCart } = useCart();
  const router = useRouter(); // Mevcut router örneği

  useEffect(() => {
    clearCart();
    // İsteğe bağlı: Otomatik yönlendirme ekleyelim mi?
    // const timer = setTimeout(() => {
    //   router.push('/');
    // }, 3000); // 3 saniye sonra otomatik yönlendir
    // return () => clearTimeout(timer);
  }, [clearCart]);

  // handleGoHome fonksiyonu artık Link kullanıldığı için gereksiz
  // const handleGoHome = () => { router.push('/'); };

  return (
    <>
      <Head>
        <title>Ödeme Sonucu - Kahve Dükkanı</title>
        <meta name="description" content="Ödeme işlemi tamamlandı." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`${styles.checkoutContainer} section`}>
        <div className="container">
          <h1 className={`${styles.checkoutTitle} h1`}>Ödeme Başarılı!</h1>
          <p className={styles.checkoutMessage}>
            Siparişiniz için teşekkür ederiz. Kahveniz en kısa sürede hazırlanacaktır.
          </p>
          {/* href="/" doğrudan anasayfaya yönlendirir. */}
          <Link href="/" className="btn btn-primary">
            Ana Sayfaya Dön
          </Link>
        </div>
      </main>
    </>
  );
};

export default CheckoutPage;