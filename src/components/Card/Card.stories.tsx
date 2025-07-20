import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Card } from './';
import { Box } from '../Box';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        cursor: { control: 'text' },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        children: (
            <>
                <Box marginBottom={2}>
                    Título do Card
                </Box>
                <Box color="#555">
                    Conteúdo do card com texto explicativo.
                </Box>
            </>
        ),
        cursor: 'pointer',
    },
};

export const CustomStyle: Story = {
    args: {
        children: <Box>Card customizado</Box>,
        cursor: 'default',
    },
};
