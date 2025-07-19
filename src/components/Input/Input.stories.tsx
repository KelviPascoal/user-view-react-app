import { Input } from './';

const meta = {
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

export const Playground = {
    args: {
        placeholder: 'Digite algo...',
        type: 'text',
        disabled: false,
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (args: any) => <Input {...args} />,
};
