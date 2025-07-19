import type { Meta, StoryObj } from '@storybook/react-webpack5';

import React from 'react';
import { Card } from './';
import { Box } from '../Box';

const meta: Meta<typeof Card> = {
    title: 'Components/Card',
    component: Card,
    tags: ['autodocs'],
    argTypes: {
        shadow: { control: 'text' },
        hoverShadow: { control: 'text' },
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
        shadow: 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
        hoverShadow: 'rgba(0, 0, 0, 0.15) 0px 8px 15px -3px, rgba(0, 0, 0, 0.1) 0px 5px 10px -3px',
        borderRadius: 12,
        padding: 6,
        backgroundColor: '#fff',
        cursor: 'pointer',
    },
};

export const CustomStyle: Story = {
    args: {
        children: <Box>Card customizado</Box>,
        shadow: 'rgba(100, 100, 200, 0.2) 0px 6px 10px',
        hoverShadow: 'rgba(100, 100, 200, 0.4) 0px 12px 20px',
        borderRadius: 24,
        padding: 8,
        backgroundColor: '#f0f0f5',
        cursor: 'default',
    },
};
