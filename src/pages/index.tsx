// src/pages/index.tsx - Ana Sayfanızın içeriği
import Head from 'next/head';
import Link from 'next/link';
import styles from '@/styles/Home.module.css'; // Home.module.css'i kullanın

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Kahve Dükkanı</title>
        <meta name="description" content="En taze kahveler burada!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* main etiketi Layout bileşeninde sarıldığı için, burada sadece içeriği veriyoruz */}
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Kahve Dükkanımıza Hoş Geldiniz!</h1>
          <p className={styles.heroSubtitle}>Gününüzü özel kılacak en taze ve özenle seçilmiş kahveler burada.</p>
          <Link href="/products" className="btn btn-primary">
            Ürünlerimizi Keşfedin
          </Link>
        </div>
      </section>

      {/* Diğer bölümler buraya gelebilir */}
    </>
  );
};

export default HomePage;