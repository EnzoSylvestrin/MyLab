import clsx from 'clsx';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import NextLink from 'next/link';

type LinkProps = {
    text: string
    href: string,
    underline?: boolean,
    size?: 'sm' | 'md' | 'lg',
    title?: boolean,
    className?: String,
    align?: 'left' | 'center' | 'right',
}

export const Link = ({ text, href, title, size = 'md', className, align, underline = false }: LinkProps) => {

    const Comp = !title ? Text : Heading;

    return (
        <Comp
            align={align}
            size={size}
            className={clsx(className, 'transition-all duration-300 hover:!text-secondary')}
        >
            <NextLink
                href={href}
                className={clsx(
                    'cursor-pointer', {
                    "underline": underline
                }
                )}
            >
                {text}
            </NextLink>
        </Comp>
    );
}