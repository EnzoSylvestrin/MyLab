import clsx from 'clsx';

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg',
  text: string,
  href?: string,
  full?: boolean,
  type?: "button" | "submit" | "reset" | undefined,
  onClick?: () => void,
}

export const Button = ({ size = 'md', type = "button", text, href, full, onClick, ...props }: ButtonProps) => {
  const Button = href ? 'a' : 'button';

  return (
    <Button
      type={type}
      className={clsx(
        "rounded-md text-white ring-secondary ring-2 transition-all duration-[800ms] z-[1] ",
        "px-[.65rem] py-2 cursor-pointer relative overflow-hidden shadow-lg outline-0 ",
        `hover:bg-transparent hover:text-secondary ${!full ? 'hover:scale-105' : ''} hover:before:w-0 hover:before:left-[-50px] `,
        "before:absolute before:left-[-20px] before:top-0 before:w-[200%] before:h-full before:bg-secondary before:skew-x-[45deg] before:z-[-1] before:transition-all before:duration-[800ms]", {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'w-full': full
      })}
      target='_blank'
      rel="noopener noreferrer"
      href={href}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};
