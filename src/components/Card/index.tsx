import React from 'react';
import { Box, BoxProps } from '../Box';

interface CardProps extends BoxProps {
    children: React.ReactNode;
    shadow?: string;
    hoverShadow?: string;
    borderRadius?: BoxProps['borderRadius'];
    padding?: BoxProps['padding'];
    backgroundColor?: BoxProps['backgroundColor'];
}

export function Card({
    children,
    shadow = 'rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px',
    hoverShadow = 'rgba(0, 0, 0, 0.15) 0px 8px 15px -3px, rgba(0, 0, 0, 0.1) 0px 5px 10px -3px',
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
            boxShadow={shadow}
            cursor="pointer"
            transition="box-shadow 0.3s ease"
            hover={{ boxShadow: hoverShadow }}
            {...rest}
            style={{
                boxShadow: shadow,
                borderRadius: typeof borderRadius === 'number' ? `${borderRadius}px` : borderRadius,
                padding: typeof padding === 'number' ? `${padding * 4}px` : padding,
                backgroundColor,
                transition: 'box-shadow 0.3s ease',
                cursor: 'pointer',
                ...rest.style,
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.currentTarget.style.boxShadow =
                    typeof hoverShadow === 'string' ? hoverShadow : e.currentTarget.style.boxShadow;
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
                e.currentTarget.style.boxShadow =
                    typeof shadow === 'string' ? shadow : e.currentTarget.style.boxShadow;
            }}
        >
            {children}
        </Box>
    );
}