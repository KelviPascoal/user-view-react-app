import { Button } from './';

const meta = {
    title: 'Components/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'highlight'],
        },
        disabled: {
            control: 'boolean',
        },
    },
};

export default meta;

export const Playground = {
    args: {
        variant: 'primary',
        disabled: false,
        children: 'Click me',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (args: any) => <Button {...args}>{args.children}</Button>,
};
