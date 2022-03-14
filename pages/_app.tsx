import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Header } from 'components'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { asPath } = router

  return (
    <div>
      {asPath !== '/' && <Header />}
      <NextNProgress color="#e4cf89" height={6} />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
