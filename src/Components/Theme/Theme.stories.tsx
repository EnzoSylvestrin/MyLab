import { useState } from 'react';

import type { Meta } from '@storybook/react';

import { Theme } from './Theme';

const meta: Meta<typeof Theme> = {
  title: 'Components/Theme',
  component: Theme,
  tags: ['autodocs']
};

export default meta;

export const Default = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  
    return (
        <div className={theme == 'dark' ? 'dark' : ''}>
            <Theme setTheme={setTheme} />
        </div>
    );
};