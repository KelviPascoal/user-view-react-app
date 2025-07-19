import styled, { css } from 'styled-components';
import {
    space,
    color,
    typography,
    layout,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    compose,
} from 'styled-system';
import React from 'react';

type Variant = 'primary' | 'highlight';
type Size = 'small' | 'medium' | 'large';

type TextProps = SpaceProps &
    ColorProps &
    TypographyProps &
    LayoutProps & {
        as?: React.ElementType;
        children: React.ReactNode;
        variant?: Variant;
    };

const variantStyles = {
    primary: css`
        color: ${({ theme }) => theme.colors.primary};
    `,
    highlight: css`
        color: ${({ theme }) => theme.colors.highlight};
    `,
};

const sizeStyles = {
    small: css`
        font-size: ${({ theme }) => theme.font.sizes.xsmall};
    `,
    medium: css`
        font-size: ${({ theme }) => theme.font.sizes.small};
    `,
    large: css`
        font-size: ${({ theme }) => theme.font.sizes.xxlarge};
    `,
};

export const Text = styled.p<TextProps>`
    ${({ theme, variant, size = 'medium' }) => css`
    margin: 0;
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    line-height: 1.5;
    ${variant && variantStyles[variant]}
    ${size !== null ? sizeStyles[size as Size] : sizeStyles.medium}
    
    ${compose(space, color, typography, layout)};
`}
`;
