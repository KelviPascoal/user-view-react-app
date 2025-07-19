import { Heading } from './';

const meta = {
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

export const Playground = {
    args: {
        children: 'Exemplo de Título',
        variant: 'primary',
        size: 'medium',
        as: 'h2',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (args: any) => <Heading {...args}>{args.children}</Heading>,
};
