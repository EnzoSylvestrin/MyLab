import type { Meta, StoryObj } from '@storybook/react';

import { TbMathAvg } from 'react-icons/tb';

import { ExpandCard } from './ExpandCard';

const meta: Meta<typeof ExpandCard> = {
  title: 'Components/ExpandCard',
  component: ExpandCard,
  tags: ['autodocs'],
  args: {
    title: {text: 'Teste'},
    subTitles: [{text: 'Elemento 1', link: '#'}]
  }
};

export default meta;
type Story = StoryObj<typeof ExpandCard>;

export const Default: Story = {};

export const WithIcon: Story = {
  args: {
    subTitles: [{text: 'Elemento 1', Icon: TbMathAvg, link: '#'}]
  }
};

export const Multiple: Story = {
  args: {
    subTitles: [{text: 'Elemento 1', link: '#'}, {text: 'Elemento 2', link: '#'}]
  }
};

export const MultipleWithIcon: Story = {
  args: {
    subTitles: [{text: 'Elemento 1', link: '#'}, {text: 'Elemento 2', Icon: TbMathAvg, link: '#'}]
  }
};