import Link from 'next/link'

const coffees = [
  { id: 1, name: 'Espresso', price: 30 },
  { id: 2, name: 'Americano', price: 35 },
  { id: 3, name: 'Latte', price: 40 },
]

export default function Home() {
  return (
    <div>
      <h1>Kahveler</h1>
      <ul>
        {coffees.map(coffee => (
          <li key={coffee.id}>
            {coffee.name} - {coffee.price}₺
            {' '}
            <button onClick={() => alert("Sepete eklendi!")}>Sepete Ekle</button>
          </li>
        ))}
      </ul>
      <nav>
        <Link href="/cart">Sepet</Link> | <Link href="/about">Hakkımızda</Link>
      </nav>
    </div>
  )
}
