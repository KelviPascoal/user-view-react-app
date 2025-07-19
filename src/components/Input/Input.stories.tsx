// Input.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Input } from './';

const meta: Meta<typeof Input> = {
    title: 'Components/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['text', 'email', 'password', 'number'],
        },
        placeholder: {
            control: 'text',
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        placeholder: 'Campo de entrada padrão',
        type: 'text',
        disabled: false,
    },
    render: (args) => <Input {...args} />,
};

export const Disabled: Story = {
    args: {
        placeholder: 'Campo desativado',
        type: 'text',
        disabled: true,
    },
    render: (args) => <Input {...args} />,
};

export const PasswordInput: Story = {
    args: {
        placeholder: 'Digite sua senha',
        type: 'password',
        disabled: false,
    },
    render: (args) => <Input {...args} />,
};

export const EmailInput: Story = {
    args: {
        placeholder: 'Digite seu email',
        type: 'email',
        disabled: false,
    },
    render: (args) => <Input {...args} />,
};

export const NumberInput: Story = {
    args: {
        placeholder: 'Digite um número',
        type: 'number',
        disabled: false,
    },
    render: (args) => <Input {...args} />,
};
