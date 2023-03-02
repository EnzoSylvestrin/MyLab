import React from 'react';

import { Button } from '../Button/Button';
import { Link } from '../Link/Link';

type User = {
  name: string;
};

interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
  <header>
    <nav className='w-full py-3 px-8 flex items-center justify-between border-b-[1px] border-b-secondary bg-grayMain dark:bg-blackMain '>
      <Link href='#' size='md' text='MyLab' underlineOnHover={false} title />
      <div>
        <ul className='list-none flex gap-2'>
          
        </ul>
        <ul className='list-none flex items-center gap-4'>
          <li><Link href="#" text='Login' colored={false} /></li>
          <li><Button text='SignUp' /></li>
        </ul>
      </div>
    </nav>
  </header>
);
