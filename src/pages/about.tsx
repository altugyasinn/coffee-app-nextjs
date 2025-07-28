// src/pages/about.tsx
import Head from 'next/head';

export default function AboutPage() {
  return (
    <div>
      <Head>
        <title>Hakkımızda</title>
        <meta name="description" content="Kahve Dükkanımız Hakkında" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Hakkımızda</h1>
        <p>
          Kahve Dükkanı olarak, en taze ve kaliteli kahve çekirdeklerini dünyanın dört bir yanından getirerek size eşsiz bir kahve deneyimi sunmayı hedefliyoruz.
          Her fincan kahvemizde tutku ve özen gizlidir.
        </p>
        <p>
          Misyonumuz, kahve severlere sadece bir içecek değil, aynı zamanda rahatlayabilecekleri, keyif alabilecekleri ve ilham alabilecekleri bir ortam sağlamaktır.
        </p>
      </main>
    </div>
  );
}