import type { Meta, StoryObj } from '@storybook/react';

import { Formula } from './Formula';

const meta: Meta<typeof Formula> = {
  title: 'Components/Formula',
  component: Formula,
  tags: ['autodocs'],
  args: {
    formula: 'F = m * a'
  }
};

export default meta;
type Story = StoryObj<typeof Formula>;

export const Default: Story = {};

export const withDivision: Story = {
    args: {
        formula: 'Vm = D / T'
    }
};