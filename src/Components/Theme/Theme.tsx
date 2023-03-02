import { Dispatch, SetStateAction, useEffect, useState } from "react";

import { BiSun } from "react-icons/bi";
import { TbMoonStars } from 'react-icons/tb';

type ThemeProps = {
    setTheme: Dispatch<SetStateAction<"light" | "dark">>;
}

export const Theme = ({ setTheme } : ThemeProps) => {

    const [darkMode, setdarkMode] = useState<boolean>(true);

    const ToggleMode = () => {
        setdarkMode(!darkMode);
        setTheme(darkMode ? 'light' : 'dark');
        localStorage.setItem('theme', darkMode ? 'light' : 'dark');
    }

    useEffect(() => {
        let theme: string | null = localStorage.getItem('theme');
        setdarkMode(theme == null ? true : theme == 'dark' ? true : false);
    }, []);

    const Icon = darkMode ? BiSun : TbMoonStars;

    return (
        <Icon
            className="text-darkColor text-xxl transition-all duration-300 hover:scale-105 dark:text-lightColor"
            size={28}
            onClick={ToggleMode}
        />
    );
}