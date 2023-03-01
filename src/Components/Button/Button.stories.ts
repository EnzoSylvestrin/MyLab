import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    text: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    text: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    text: 'Button',
  },
};

export const Full: Story = {
  args: {
    size: 'md',
    text: 'Button',
    full: true
  },
};

export const Link: Story = {
  args: {
    size: 'md',
    text: 'google',
    href: 'https://www.google.com.br'
  }
};