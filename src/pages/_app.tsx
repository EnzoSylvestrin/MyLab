import type { AppProps } from 'next/app';

import Head from 'next/head';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MyLab</title>
        <meta name="description" content="Site feito para aplicar conceitos acadêmicos por meio da programação" />
        <meta name="author" content="Enzo Sylvestrin - enzospavani@gmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}
