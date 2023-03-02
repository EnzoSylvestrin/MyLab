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
    <header>
      <nav className='w-full min-h-[60px] h-[8vh] py-3 px-8 flex items-center justify-between border-b-[1px] border-b-secondary bg-grayMain dark:bg-blackMain '>
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
