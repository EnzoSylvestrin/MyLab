import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";

import { motion } from "framer-motion";

import { useRouter } from 'next/router';

import { ANIMATION_TYPE, DURATION_ANIMATION } from "@/Utils/Contants";

import { RootState } from "@/stores/MenuStore";

import { Header } from '@/Components/Header/Header';
import { ToggleBar } from '@/Components/ToggleBar/ToggleBar';
import { useIsMedium } from "@/Hooks/UseMediaQuery";
import LoadingRouter from "./LoadingRouter";

export const Screen = ({ Component, pageProps }: any) => {

  const router = useRouter()

  const [state, setState] = useState({
    isRouteChanging: false,
    loadingKey: 0,
  })

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: true,
        loadingKey: prevState.loadingKey ^ 1,
      }))
    }

    const handleRouteChangeEnd = () => {
      setState((prevState) => ({
        ...prevState,
        isRouteChanging: false,
      }))
    }

    router.events.on('routeChangeStart', handleRouteChangeStart)
    router.events.on('routeChangeComplete', handleRouteChangeEnd)
    router.events.on('routeChangeError', handleRouteChangeEnd)

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart)
      router.events.off('routeChangeComplete', handleRouteChangeEnd)
      router.events.off('routeChangeError', handleRouteChangeEnd)
    }
  }, [router.events])

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  const IsMedium = useIsMedium();

  const open = useSelector((state: RootState) => state.menu.isContextMenuOpen);

  return (
    <section className={clsx(
      `${theme === 'dark' ? 'dark' : ''}`,
      'selection:text-secondary',
    )}>
      <LoadingRouter isRouteChanging={state.isRouteChanging} key={state.loadingKey} />
      <Header setTheme={setTheme} />
      <ToggleBar />
      <motion.main
        className={clsx(
          'pl-0 pt-2 pr-[10px] z-10 h-[calc(100vh_-_64px)] transition-colors duration-300',
          'bg-grayMain dark:bg-darkMain md:pl-60'
        )}
        animate={{
          paddingLeft: open ? !IsMedium ? '10px' : '250px' : '10px'
        }}
        transition={{
          duration: DURATION_ANIMATION,
          type: ANIMATION_TYPE
        }}
      >
        <Component {...pageProps} />
      </motion.main>
    </section>
  );
}