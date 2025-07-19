import type { Meta, StoryObj } from '@storybook/react-webpack5';
import { Box } from './';

const meta: Meta<typeof Box> = {
    title: 'Components/Box',
    component: Box,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        padding: { control: 'text' },
        borderRadius: { control: 'text' },
        gap: { control: 'text' },
        display: {
            control: 'select',
            options: ['block', 'inline-block', 'flex', 'grid', 'inline-flex', 'inline-grid'],
        },
    },
};

export default meta;

type Story = StoryObj<typeof Box>;

export const Playground: Story = {
    args: {
        backgroundColor: '#e0f7fa',
        color: '#006064',
        padding: '16px',
        borderRadius: '8px',
        display: 'flex',
        gap: '12px',
    },
    render: (args) => (
        <Box {...args}>
            <Box backgroundColor="#004d40" color="#fff" padding="8px" borderRadius="4px" flex="1">
                Item 1
            </Box>
            <Box backgroundColor="#00796b" color="#fff" padding="8px" borderRadius="4px" flex="1">
                Item 2
            </Box>
            <Box backgroundColor="#009688" color="#fff" padding="8px" borderRadius="4px" flex="1">
                Item 3
            </Box>
        </Box>
    ),
};
export const Default: Story = {
    args: {
        backgroundColor: '#f0f0f0',
        color: '#333',
        padding: '20px',
        borderRadius: '10px',
        display: 'block',
    },
    render: (args) => <Box {...args}>This is a default Box component</Box>,
};