import type { Meta, StoryObj } from '@storybook/react';

import { Link } from './Link';

const meta: Meta<typeof Link> = {
    title: 'Components/Link',
    component: Link,
    tags: ['autodocs'],
    args: {
        text: 'Example text',
        href: '#',
    }
};

export default meta;
type Story = StoryObj<typeof Link>;

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

export const Title: Story = {
    args: {
        title: true
    }
}

export const Underline: Story = {
    args: {
        underline: true
    }
}

export const NotColored: Story = {
    args: {
        colored: false
    }
}

export const External: Story = {
    args: {
        href: 'https://google.com',
        external: true
    }
}

export const WithoutUnderlineOnHover: Story = {
    args: {
        text: 'hover me',
        underlineOnHover: false
    }
}

export const Custom: Story = {
    args: {
        text: 'hover me',
        underline: true,
        colored: false,
        className: '!text-transparent bg-clip-text bg-gradient-to-r from-red to-secondary'
    }
};