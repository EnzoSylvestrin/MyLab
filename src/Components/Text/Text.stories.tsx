import type { Meta, StoryObj } from '@storybook/react';

import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Example text'
  }
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
  },
};

export const Center: Story = {
  args: {
    align: 'center',
  }
};

export const Right: Story = {
  args: {
    align: 'right',
  }
};

export const Custom: Story = {
  args: {
    children: 'hover me',
    className: 'underline hover:!text-main',
  }
};