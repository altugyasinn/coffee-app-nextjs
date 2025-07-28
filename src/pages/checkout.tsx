// src/pages/checkout.tsx
import Head from 'next/head';
import Link from 'next/link';

export default function CheckoutPage() {
  // Gerçek bir ödeme işlemi burada entegre edilebilir.
  // Basitlik adına şu an için sadece bir başarı mesajı gösteriyoruz.

  return (
    <div>
      <Head>
        <title>Ödeme Sonucu</title>
        <meta name="description" content="Ödeme İşlemi" />
      </Head>

      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>Ödeme Başarılı!</h1>
        <p>Siparişiniz için teşekkür ederiz. Kahveniz en kısa sürede hazırlanacaktır.</p>
        <Link href="/">
          <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', cursor: 'pointer', marginTop: '1rem' }}>Ana Sayfaya Dön</button>
        </Link>
      </main>
    </div>
  );
}