import { useState } from 'react';

import { Provider } from 'react-redux'
import store from '../stores/MenuStore';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Header } from '@/Components/Header/Header';
import { ToggleBar } from '@/Components/ToggleBar/ToggleBar';

import '@/styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <Provider store={store}>
      <Head>
        <title>MyLab</title>
        <meta name="description" content="Site feito para aplicar conceitos acadêmicos por meio da programação" />
        <meta name="author" content="Enzo Sylvestrin - enzospavani@gmail.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={theme === 'dark' ? 'dark' : ''}>
        <Header setTheme={setTheme}/>
        <ToggleBar />
        <section className='bg-grayMain pl-56 pt-[8vh] z-10 min-h-[100vh] h-[100vh] dark:bg-blackMain'>
          <Component {...pageProps} />
        </section>
      </section>
    </Provider>
  )
}
