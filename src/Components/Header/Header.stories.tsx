import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Sections/Header',
  component: Header,
  tags: ['autodocs'],
};

export default meta;

export const Default = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  return (
    <Header setTheme={setTheme} />
  );
};
