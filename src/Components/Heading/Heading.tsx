import { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import clsx from 'clsx';

type HeadingProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    className?: String,
    align?: 'left' | 'center' | 'right',
}

export const Heading = ({children, size = 'md', className, align = 'left', ...props} : HeadingProps) => {

    const Comp = children != null ? 'h2' : Slot;

    return (
        <Comp
            className={clsx(
                'font-bold text-neutral-900 dark:text-gray-50',
                {
                    'text-xl': size === 'sm',
                    'text-xxl': size === 'md',
                    'text-2xl': size === 'lg',
                    'text-center': align === 'center',
                    'text-right': align === 'right',
                },
                className,
            )}
            {...props}
        >
            {children}
        </Comp>
    );
}