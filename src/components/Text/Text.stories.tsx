import React from 'react';
import { Text } from './';

const meta = {
    title: 'Components/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        children: 'Texto de exemplo',
        variant: 'primary',
        size: 'medium',
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['', 'primary', 'highlight'],
        },
        size: {
            control: 'select',
            options: ['small', 'medium', 'large'],
        },
        as: {
            control: false,
        },
    },
};

export default meta;

export const Default = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (args: any) => <Text {...args} />
};

export const Highlight = {
    args: {
        children: 'Texto em destaque',
        variant: 'highlight',
        size: 'large',
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    render: (args: any) => <Text {...args} />
};
