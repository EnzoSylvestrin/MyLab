import { useState } from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from './Theme';

const meta: Meta<typeof Theme> = {
  title: 'Components/Theme',
  component: Theme,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Theme>;


export const Default = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
    return <Theme setTheme={setTheme} />;
};