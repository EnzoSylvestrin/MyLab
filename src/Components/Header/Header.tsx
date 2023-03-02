import React from 'react';

import { Button } from '../Button/Button';
import { Link } from '../Link/Link';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <nav className='w-full p-3 flex items-center justify-between border-b-[1px] border-b-secondary bg-slate-100 dark:bg-neutral-800 '>
      <Link href='#' size='lg' text='MyLab' title underlineOnHover={false} />
      <ul className='list-none flex items-center gap-4 px-3'>
        <li><Link href="https://google.com" text='Login' colored={false}/></li>
        <li><Button text='SignUp' /></li>
      </ul>
    </nav>
  </header>
);
