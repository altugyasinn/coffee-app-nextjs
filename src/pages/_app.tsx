// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { CartProvider } from '@/context/CartContext'; // Doğru yol
import Layout from '@/components/Layout'; // Doğru yol
import '@/styles/globals.css'; // Doğru yol
import Head from 'next/head'; // Head bileşeni doğru

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // *** KRİTİK: CartProvider'ın Layout ve Component'i sarmaladığından emin olun ***
    <CartProvider>
      <Head>
        {/* Boş bırakın veya viewport meta etiketi gibi genel şeyler ekleyin */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartProvider>
  );
}

export default MyApp;