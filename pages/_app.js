import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ThemeProvider } from 'styled-components';
import 'styles/layout.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header'
import Head from 'next/head';

const theme = {
  colors: {
    primary: '#A020F0'
  }
}
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />)
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>About Next Project</title>
          <meta name="description" content="Free tutorial on web development" />
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
