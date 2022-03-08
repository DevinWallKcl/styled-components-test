import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import defaultTheme from '../themes/default'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
