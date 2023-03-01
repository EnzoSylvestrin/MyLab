import type { Meta, StoryObj } from '@storybook/react';

import { Loading } from './Loading';

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Loading>;

export const Default: Story = {};

export const Left: Story = {
  args: {
    align: 'left',
  }
};

export const Right: Story = {
  args: {
    align: 'right',
  }
};

export const CustomSize: Story = {
  args: {
    w: '140px',
    h: '140px',
  }
};