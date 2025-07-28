import Link from 'next/link'

export default function Success() {
  return (
    <div>
      <h1>✅ Ödemeniz Alındı</h1>
      <p>Afiyet olsun! Siparişiniz hazırlanıyor.</p>
      <Link href="/">Ana Sayfa</Link>
    </div>
  )
}
