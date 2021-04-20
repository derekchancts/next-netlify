import Link from 'next/link'
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Link href="/"><a>Home</a></Link>
    <Link href="/about"><a>About</a></Link>
    <Component {...pageProps} />
    <footer>Copyright chaners 2021</footer>
    </>
  )
}

export default MyApp
