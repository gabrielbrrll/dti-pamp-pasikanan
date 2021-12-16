import 'styles/globals.css'
import type { AppProps } from 'next/app'
import { Footer, Header } from 'components'
import { useRouter } from 'next/router'

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter()
  const { asPath } = router

  return (
    <div>
      {asPath !== '/' && <Header />}
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
