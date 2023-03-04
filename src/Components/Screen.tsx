import { useState } from "react";
import { useSelector } from "react-redux";

import { motion } from "framer-motion";

import { RootState } from "@/stores/MenuStore";

import { Header } from '@/Components/Header/Header';
import { ToggleBar } from '@/Components/ToggleBar/ToggleBar';

import { ANIMATION_TYPE, DURATION_ANIMATION } from "@/Utils/Contants";

export const Screen = ({ Component, pageProps }: any) => {

    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const open = useSelector((state: RootState) => state.isContextMenuOpen);

    return (
        <section className={theme === 'dark' ? 'dark' : ''}>
            <Header setTheme={setTheme} />
            <ToggleBar />
            <motion.section
                className='pt-16 z-10 min-h-[100vh] h-full transition-colors duration-300 bg-grayMain dark:bg-darkMain'
                initial={{
                    paddingLeft: '240px'
                }}
                animate={{
                    paddingLeft: open ? '240px' : '0'
                }}
                transition={{
                    duration: DURATION_ANIMATION,
                    type: ANIMATION_TYPE
                }}
            >
                <Component {...pageProps} />
            </motion.section>
        </section>
    );
}