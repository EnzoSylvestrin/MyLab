import clsx from "clsx";
import { IconType } from "react-icons/lib"

type IconProps = {
    icon: IconType,
    size?: string | number,
    colored?: boolean,
    className?: string
}

export const Icon = ({icon: IconComponent, size = 24, colored, className} : IconProps) => {
    return (
        <IconComponent 
            className={clsx(
                'w-6 h-6 ',
                colored ? 'text-secondary' : 'text-darkColor dark:text-lightColor',
                className
            )} 
            size={size} 
        />
    );
}