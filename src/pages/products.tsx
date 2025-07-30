// src/pages/products.tsx
import Head from 'next/head';
import ProductCard from '@/components/ProductCard';
import styles from '@/styles/Products.module.css'; // Yolun doğru olduğundan emin olun

// Ürün verilerinizi burada tanımlıyorsanız (örnek):
const products = [
  { id: '1', name: 'Espresso', price: 20, image: '/images/espresso.jpg' }, // id: '1' olarak string yapın
  { id: '2', name: 'Latte', price: 25, image: '/images/latte.jpg' },     // id: '2' olarak string yapın
  { id: '3', name: 'Americano', price: 22, image: '/images/americano.jpg' }, // id: '3' olarak string yapın
  { id: '4', name: 'Cappuccino', price: 28, image: '/images/cappuccino.jpg' }, // id: '4' olarak string yapın
  { id: '5', name: 'Mocha', price: 30, image: '/images/mocha.jpg' },       // id: '5' olarak string yapın
];

export default function ProductsPage() {
  return (
    <>
      <Head>
        <title>Kahvelerimiz</title>
        <meta name="description" content="En taze kahvelerimizi keşfedin." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.productsContainer}>
        <h1 className="h1">Kahvelerimiz</h1>
        <div className={styles.productList}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </>
  );
}