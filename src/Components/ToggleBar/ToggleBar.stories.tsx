import type { Meta } from '@storybook/react';

import { Provider } from 'react-redux';
import store from '@/stores/MenuStore';

import { ToggleBar } from './ToggleBar';

const meta: Meta<typeof ToggleBar> = {
  title: 'Sections/ToggleBar',
  component: ToggleBar,
  tags: ['autodocs']
};

export default meta;

export const Default = () => {

  return (
    <Provider store={store}>
      <ToggleBar />
    </Provider>
);
}