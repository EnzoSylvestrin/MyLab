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
        "rounded-xl bg-secondary text-white ring-secondary ring-2 transition-all duration-500 ",
        "px-[.65rem] py-2 cursor-pointer shadow-lg ",
        'hover:bg-transparent hover:text-secondary', {
        'text-sm': size === 'sm',
        'text-md': size === 'md',
        'text-lg': size === 'lg',
        'w-full': full
      })}
      {...(href ? { target: "_blank", rel: "noopener noreferrer", href: href } : {})}
      onClick={onClick}
      {...props}
    >
      {text}
    </Button>
  );
};
