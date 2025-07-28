import Link from 'next/link'

export default function Cart() {
  return (
    <div>
      <h1>Sepet</h1>
      <p>Sepetiniz şu anda boş.</p>
      <Link href="/">Alışverişe Devam Et</Link>
      <br />
      <Link href="/success">
        <button>Ödeme Yap</button>
      </Link>
    </div>
  )
}
