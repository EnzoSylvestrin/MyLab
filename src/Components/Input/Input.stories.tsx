import { Meta, StoryObj } from '@storybook/react';

import { BiEnvelope } from 'react-icons/bi';

import { Input, InputRootProps } from "./Input";

const meta: Meta<InputRootProps> = {
    title: "Components/Input",
    component: Input.Root,
    tags: ['autodocs'],
    argTypes: {
        children: {
            table: {
                disable: true
            }
        },
    }
}

export default meta;

type Story = StoryObj<InputRootProps>;

export const Default : Story = {
    args: {
        children: [
            <Input.Icon icon={BiEnvelope} />,
            <Input.Input placeholder="Digite seu email..." />
        ]
    },
}

export const IconColored : Story = {
    args: {
        children: [
            <Input.Icon icon={BiEnvelope} colored/>,
            <Input.Input placeholder="Digite seu email..." />
        ]
    }
}

export const WithoutIcon : Story = {
    args: {
        children: <Input.Input placeholder="Digite seu email..." />
    }
}