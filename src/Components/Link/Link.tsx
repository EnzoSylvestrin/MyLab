import clsx from 'clsx';

import { Heading } from '../Heading/Heading';
import { Text } from '../Text/Text';

import NextLink from 'next/link';

type LinkProps = {
    text: string
    href: string,
    underline?: boolean,
    colored?: boolean,
    size?: 'sm' | 'md' | 'lg',
    title?: boolean,
    className?: String,
    underlineOnHover?: boolean,
    align?: 'left' | 'center' | 'right',
    external?: boolean,
}

export const Link = ({ text, href, underline = false, colored = true, title, size = 'md', className, underlineOnHover = true, align, external = false }: LinkProps) => {

    const Comp = !title ? Text : Heading;

    return (
        <Comp
            align={align}
            size={size}
            className={className}
        >
            <NextLink
                href={href}
                className={clsx(
                    'cursor-pointer transition-all duration-300 hover:!text-secondary ', {
                        '!text-secondary': colored,
                        'hover:underline': underlineOnHover,
                        'underline': underline
                    },
                )}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {text}
            </NextLink>
        </Comp>
    );
}