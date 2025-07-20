import React from 'react';
import { useTheme } from 'styled-components';
import { Box, BoxProps } from '../Box';

interface CardProps extends Omit<BoxProps, 'borderRadius' | 'padding' | 'backgroundColor'> {
    children: React.ReactNode;
}

export function Card({ children, ...rest }: CardProps) {
    const theme = useTheme();

    const fixedBorderRadius = theme.border.radius;
    const fixedPadding = theme.spacings.small;
    const fixedBackgroundColor = theme.colors.white;
    const fixedTransition = theme.transition.default;

    return (
        <Box
            borderRadius={fixedBorderRadius}
            padding={fixedPadding}
            backgroundColor={fixedBackgroundColor}
            cursor="pointer"
            {...rest}
            style={{
                padding: typeof fixedPadding === 'number' ? `${fixedPadding * 4}px` : fixedPadding,
                backgroundColor: fixedBackgroundColor,
                borderRadius: typeof fixedBorderRadius === 'number' ? `${fixedBorderRadius}px` : fixedBorderRadius,
                transition: `box-shadow ${fixedTransition}`,
                cursor: 'pointer',
                ...rest.style,
            }}
        >
            {children}
        </Box>
    );
}
