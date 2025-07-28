import Link from 'next/link'

export default function About() {
  return (
    <div>
      <h1>Hakkımızda</h1>
      <p>Bu site kahve severler için tasarlanmıştır ☕</p>
      <Link href="/">Ana Sayfa</Link>
    </div>
  )
}
