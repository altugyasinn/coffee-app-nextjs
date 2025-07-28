// src/pages/cart.tsx
import Head from 'next/head';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { cartItems } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Head>
        <title>Sepetim</title>
        <meta name="description" content="Sepetinizdeki ürünler" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Sepetim</h1>
        {cartItems.length === 0 ? (
          <p>Sepetinizde ürün bulunmamaktadır. <Link href="/products">Ürünlerimize göz atın!</Link></p>
        ) : (
          <div>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {cartItems.map((item, index) => (
                <li key={index} style={{ marginBottom: '0.5rem', borderBottom: '1px dashed #eee', paddingBottom: '0.5rem' }}>
                  {item.name} - {item.price}₺
                  {/* Sepetten silme butonu ekleyebilirsiniz */}
                  {/* <button onClick={() => removeFromCart(item.id)}>Sil</button> */}
                </li>
              ))}
            </ul>
            <h2 style={{ marginTop: '2rem' }}>Toplam: {totalPrice}₺</h2>
            <Link href="/checkout">
              <button style={{ padding: '1rem 2rem', fontSize: '1.2rem', cursor: 'pointer' }}>Ödemeye Geç</button>
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}