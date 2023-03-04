import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { BiSun } from "react-icons/bi";
import { TbMoonStars } from 'react-icons/tb';

export type ThemeProps = {
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const Theme = ({ setTheme }: ThemeProps) => {

    const [darkMode, setdarkMode] = useState<boolean>(true);

    const ToggleMode = () => {
        setdarkMode(!darkMode);
        setTheme(darkMode ? 'light' : 'dark');
        document.body.style.setProperty('--bgColor', darkMode ? '#f5f5f5' : '#333333');
        document.body.style.setProperty('--colorInverse', darkMode ? '#333333' : '#f5f5f5');
        localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    }

    useEffect(() => {
        let theme = localStorage.getItem('theme');
        setdarkMode(theme == null ? true : theme === 'dark' ? true : false);
        setTheme(theme == null ? 'dark' : theme === 'dark' ? 'dark' : 'light');
        document.body.style.setProperty('--bgColor', theme != "light" ? '#333333' : '#f5f5f5');
        document.body.style.setProperty('--colorInverse', theme != "light" ? '#f5f5f5' : '#333333');
    }, []);

    const Icon = darkMode ? BiSun : TbMoonStars;

    return (
        <div
            className="rounded-full p-[6px] hover:bg-lightHover dark:hover:bg-darkHover hover:scale"
            onClick={ToggleMode}
        >
            <Icon
                className="text-darkColor text-xxl transition-all duration-300 dark:text-lightColor"
                size={28}
            />
        </div>
    );
}