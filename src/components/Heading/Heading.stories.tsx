// Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Heading } from './';

const meta: Meta<typeof Heading> = {
    title: 'Components/Heading',
    component: Heading,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'highlight'],
        },
        size: {
            control: 'radio',
            options: ['small', 'medium', 'large'],
        },
        as: {
            control: 'select',
            options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Heading>;

export const Playground: Story = {
    args: {
        children: 'Exemplo de Título',
        variant: 'primary',
        size: 'medium',
        as: 'h2',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};
export const Default: Story = {
    args: {
        children: 'Título Padrão',
        variant: 'primary',
        size: 'large',
        as: 'h1',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};
export const Highlight: Story = {
    args: {
        children: 'Título em Destaque',
        variant: 'highlight',
        size: 'medium',
        as: 'h3',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};
export const CustomSize: Story = {
    args: {
        children: 'Título Personalizado',
        variant: 'primary',
        size: 'small',
        as: 'h4',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};

export const CustomTag: Story = {
    args: {
        children: 'Título com Tag Personalizada',
        variant: 'highlight',
        size: 'medium',
        as: 'span',
    },
    render: (args) => <Heading {...args}>{args.children}</Heading>,
};
