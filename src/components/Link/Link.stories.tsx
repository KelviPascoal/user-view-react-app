// Link.stories.tsx
import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Link } from './';

const meta: Meta<typeof Link> = {
    title: 'Components/Link',
    component: Link,
    tags: ['autodocs'],
    argTypes: {
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        children: { control: 'text' },
        href: { control: 'text' },
    },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
    args: {
        children: 'Link padrão',
        href: '#',
        size: 'medium',
    },
};
