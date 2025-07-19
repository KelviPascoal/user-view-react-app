import type { Meta, StoryObj } from '@storybook/react-webpack5';

import React from 'react';
import { Card } from './';
import { Box } from '../Box';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        borderRadius: { control: 'number' },
        padding: { control: 'number' },
        backgroundColor: { control: 'color' },
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
        borderRadius: 12,
        padding: 6,
        backgroundColor: '#fff',
        cursor: 'pointer',
    },
};

export const CustomStyle: Story = {
    args: {
        children: <Box>Card customizado</Box>,
        borderRadius: 24,
        padding: 8,
        backgroundColor: '#f0f0f5',
        cursor: 'default',
    },
};
