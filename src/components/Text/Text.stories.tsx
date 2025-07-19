import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Text } from './';

const meta: Meta<typeof Text> = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['', 'primary', 'highlight'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        as: {
            control: false, // desativa controle no Storybook
        },
    },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
    args: {
        children: 'Texto de exemplo',
        variant: 'primary',
        size: 'medium',
    },
};

export const Highlight: Story = {
    args: {
        children: 'Texto em destaque',
        variant: 'highlight',
        size: 'large',
    },
};
