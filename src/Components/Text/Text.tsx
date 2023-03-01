import { ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

import clsx from 'clsx';

type TextProps = {
    children: ReactNode,
    size?: 'sm' | 'md' | 'lg',
    className?: String,
    align?: 'left' | 'center' | 'right',
}

export const Text = ({children, size = 'md', className, align = 'left', ...props} : TextProps) => {

    const Comp = children != null ? 'p' : Slot;

    return (
        <Comp
            className={clsx(
                'text-neutral-900 dark:text-gray-50',
                {
                    'text-sm': size === 'sm',
                    'text-md': size === 'md',
                    'text-lg': size === 'lg',
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