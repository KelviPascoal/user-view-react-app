import { Box } from './';

const meta = {
    title: 'Components/Box',
    component: Box,
    tags: ['autodocs'],
    argTypes: {
        backgroundColor: { control: 'color' },
        color: { control: 'color' },
        padding: { control: 'text' },
        borderRadius: { control: 'text' },
        boxShadow: { control: 'text' },
        gap: { control: 'text' },
        display: {
            control: 'select',
            options: ['block', 'inline-block', 'flex', 'grid', 'inline-flex', 'inline-grid'],
        },
    },
};

export default meta;

export const Playground = {
    args: {
        backgroundColor: '#e0f7fa',
        color: '#006064',
        padding: '16px',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
        display: 'flex',
        gap: '12px',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (args: any) => (
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
