import type { Meta, StoryObj } from '@storybook/react';

import { ToggleBar } from './ToggleBar';

const meta: Meta<typeof ToggleBar> = {
  title: 'Components/ToggleBar',
  component: ToggleBar,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof ToggleBar>;

export const Default: Story = {};