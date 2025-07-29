// src/pages/index.tsx
import Head from 'next/head';
import styles from '../styles/Home.module.css'; // CSS Modülünü import ediyoruz

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Kahve Dükkanı</title>
        <meta name="description" content="Hoş Geldiniz!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainContent}> {/* class'ı uyguluyoruz */}
        <h1>Kahve Dükkanımıza Hoş Geldiniz!</h1>
        <p>En taze kahvelerimiz için <a href="/products">ürünler sayfamızı</a> ziyaret edin.</p>
      </main>
    </div>
  );
}