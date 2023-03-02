import type { Meta, StoryObj } from '@storybook/react';

import { ExpandCard } from './ExpandCard';

const meta: Meta<typeof ExpandCard> = {
  title: 'Components/ExpandCard',
  component: ExpandCard,
  tags: ['autodocs'],
  args: {
    title: 'Teste',
    subTitles: ['Elemento 1'],
  }
};

export default meta;
type Story = StoryObj<typeof ExpandCard>;

export const Default: Story = {};

export const Multiple: Story = {
  args: {
    subTitles: ['Elemento 1', 'Elemento 2']
  }
};