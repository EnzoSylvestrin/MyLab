import clsx from 'clsx';
import React from 'react';

interface ButtonProps {
  size?: 'sm' | 'md' | 'lg';
  text: string;
  href?: string;
  full?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

export const Button = ({ size = 'md', type = "button", text, href, full, ...props }: ButtonProps) => {
  const Button = href ? 'a' : 'button';

  return (
    <Button
      type={type}
      className={clsx(
        "rounded-full text-white ring-secondary ring-2 transition-all duration-700 z-[1] ",
        "px-[.65rem] py-2 cursor-pointer relative overflow-hidden shadow-lg ",
        `hover:bg-transparent hover:text-secondary ${!full ? 'hover:scale-105' : ''} hover:before:w-0 hover:before:left-[-50px] `,
        "before:absolute before:left-[-10px] before:top-0 before:w-[130%] before:h-full before:bg-secondary before:skew-x-[45deg] before:z-[-1] before:transition-all before:duration-700", {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'w-full': full
      })}
      target='_blank'
      rel="noopener noreferrer"
      href={href}
      {...props}
    >
      {text}
    </Button>
  );
};
