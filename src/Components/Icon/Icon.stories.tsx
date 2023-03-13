import type { Meta, StoryObj } from '@storybook/react';

import { GrMail } from 'react-icons/gr';

import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  args: {
    icon: GrMail
  }
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {};

export const Colored: Story = {
  args: {
    colored: true
  }
};

export const WithoutDarkMode: Story = {
  args: {
    useDarkMode: false
  }
};

export const CustomSize: Story = {
  args: {
    size: 32,
  }
};

export const Custom: Story = {
  args: {
    colored: true,
    size: 40,
    className: 'transition-all duration-300 hover:scale-110'
  }
}