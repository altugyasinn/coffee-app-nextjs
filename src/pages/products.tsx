// src/pages/products.tsx
import Head from 'next/head';
import { useCart } from "@/context/CartContext";

const coffeeList = [
  { id: 1, name: "Espresso", price: 20 },
  { id: 2, name: "Latte", price: 25 },
  { id: 3, name: "Americano", price: 22 },
  { id: 4, name: "Capuccino", price: 28 },
  { id: 5, name: "Mocha", price: 30 },
];

export default function ProductsPage() {
  const { addToCart } = useCart();

  return (
    <div>
      <Head>
        <title>Ürünlerimiz</title>
        <meta name="description" content="En taze kahvelerimiz" />
      </Head>

      <main style={{ padding: '2rem' }}>
        <h1>Kahvelerimiz</h1>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {coffeeList.map((coffee) => (
            <li key={coffee.id} style={{ marginBottom: '1rem', border: '1px solid #ccc', padding: '1rem' }}>
              <h3>{coffee.name}</h3>
              <p>Fiyat: {coffee.price}₺</p>
              <button onClick={() => addToCart(coffee)} style={{ padding: '0.5rem 1rem', cursor: 'pointer' }}>Sepete Ekle</button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}