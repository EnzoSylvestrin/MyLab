import { useState } from "react";
import { useSelector } from "react-redux";

import clsx from "clsx";

import { motion } from "framer-motion";

import { ANIMATION_TYPE, DURATION_ANIMATION } from "@/Utils/Contants";

import { RootState } from "@/stores/MenuStore";

import { Header } from '@/Components/Header/Header';
import { ToggleBar } from '@/Components/ToggleBar/ToggleBar';
import { useIsMedium } from "@/Hooks/UseMediaQuery";

export const Screen = ({ Component, pageProps }: any) => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const IsMedium = useIsMedium();

    const open = useSelector((state: RootState) => state.isContextMenuOpen);

    return (
        <section className={clsx(
            `${theme === 'dark' ? 'dark' : ''}`,
            'selection:text-secondary',
        )}>
            <Header setTheme={setTheme} />
            <ToggleBar />
            <motion.main
                className={clsx(
                    'pl-0 pt-2 z-10 h-[calc(100vh_-_64px)] transition-colors duration-300',
                    'bg-grayMain dark:bg-darkMain md:pl-60'
                )}
                animate={{
                    paddingLeft: open ? !IsMedium ? 0 : '240px' : 0
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