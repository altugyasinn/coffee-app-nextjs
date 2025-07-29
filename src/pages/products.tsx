// src/pages/products.tsx
import Head from 'next/head';
import styles from '../styles/Products.module.css';
import ProductCard from '@/components/ProductCard';

const coffeeList = [
  { id: 1, name: "Espresso", price: 20 },
  { id: 2, name: "Latte", price: 25 },
  { id: 3, name: "Americano", price: 22 },
  { id: 4, name: "Capuccino", price: 28 },
  { id: 5, name: "Mocha", price: 30 },
];

export default function ProductsPage() {
  return (
    <div>
      <Head>
        <title>Ürünlerimiz</title>
        <meta name="description" content="En taze kahvelerimiz" />
      </Head>

      <main className={styles.mainContent}>
        <h1>Kahvelerimiz</h1>
        <ul className={styles.productList}>
          {/* Buradaki map ve return yapısını kontrol edin */}
          {coffeeList.map((coffee) => ( // Bu parantez map fonksiyonunun arrow function'ını başlatır ve JSX döndüreceğini belirtir
            <ProductCard key={coffee.id} coffee={coffee} />
          ))} {/* Bu parantez map fonksiyonunun arrow function'ını ve map çağrısını kapatır */}
        </ul>
      </main>
    </div>
  );
}