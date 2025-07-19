import React from 'react';
import { Box, BoxProps } from '../Box';

interface CardProps extends BoxProps {
    children: React.ReactNode;

    borderRadius?: BoxProps['borderRadius'];
    padding?: BoxProps['padding'];
    backgroundColor?: BoxProps['backgroundColor'];
}

export function Card({
    children,
    borderRadius = 12,
    padding = 6,
    backgroundColor = '#fff',
    ...rest
}: CardProps) {
    return (
        <Box
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}
            padding={padding}
            cursor="pointer"
            {...rest}
            style={{
                borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
                padding: typeof padding === 'number' ? `${padding * 4}px` : padding,
                backgroundColor,
                transition: 'box-shadow 0.3s ease',
                cursor: 'pointer',
                ...rest.style,
            }}
        >
            {children}
        </Box>
    );
}