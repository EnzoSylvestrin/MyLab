import clsx from 'clsx';
import { Button } from '../Button/Button';
import { Link } from '../Link/Link';
import { Theme, ThemeProps } from '../Theme/Theme';

type User = {
  name: string;
};

type HeaderProps = ThemeProps & {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount, setTheme }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-[10]">
      <nav className={clsx(
        'w-full flex-col h-auto border-b-[1px] shadow-lg border-b-secondary py-3 px-4 flex items-center',
        'justify-between transition-colors duration-300 bg-grayMain dark:bg-darkMain',
        'xs:flex-row xs:h-16'
      )}
      >
        <Link href='#' size='md' text='MyLab' underlineOnHover={false} title />
        <div className='flex items-center justify-center'>
          <Theme setTheme={setTheme} />
          <div className='w-[2px] h-6 bg-gray-400 mx-3' />
          <ul className='list-none flex items-center gap-4'>
            <li><Link href="#" text='Login' colored={false} /></li>
            <li><Button text='SignUp' /></li>
          </ul>
        </div>
      </nav>
    </header>
  )
};
