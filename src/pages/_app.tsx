// src/pages/_app.tsx
import type { AppProps } from 'next/app';
import { CartProvider } from '../context/CartContext';
import Navbar from '../components/Navbar'; // Navbar'ı import ediyoruz
import '../styles/globals.css'; // Stil dosyanız

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Navbar /> {/* Navbar'ı CartProvider'ın içine, Component'in üstüne ekliyoruz */}
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;