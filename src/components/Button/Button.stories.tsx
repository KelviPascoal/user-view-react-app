import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Button, ButtonProps } from './';

const meta: Meta<ButtonProps> = {
    title: 'Components/Button',
    component: Button,
    argTypes: {
        variant: {
            control: 'radio',
            options: ['primary', 'secondary', 'highlight'],
        },
        fullWidth: {
            control: 'boolean',
        },
        disabled: {
            control: 'boolean',
        },
        children: {
            control: 'text',
        },
    },
};

export default meta;

type Story = StoryObj<ButtonProps>;

export const Playground: Story = {
    args: {
        variant: 'primary',
        disabled: false,
        children: 'Click me',
    },
    render: (args) => <Button {...args}>{args.children}</Button>,
};

export const AllVariantsShowcase: Story = {
    render: () => (
        <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))' }}>
            <Button variant="primary">Primary</Button>
            <Button variant="primary" disabled>Primary Disabled</Button>

            <Button variant="secondary">Secondary</Button>
            <Button variant="secondary" disabled>Secondary Disabled</Button>

            <Button variant="highlight">Highlight</Button>
            <Button variant="highlight" disabled>Highlight Disabled</Button>
        </div>
    ),
};
