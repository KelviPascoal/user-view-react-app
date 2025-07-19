import styled, { css } from 'styled-components';

import React from 'react';

type Variant = 'primary' | 'highlight';
type Size = 'small' | 'medium' | 'large';
export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: React.ElementType;
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;
    margin?: string;
    padding?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    width?: string;
    height?: string;
}

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

export const Heading = styled.h2<HeadingProps>`
    ${({ theme, variant, size = 'medium', }) => css`
        margin: 0;
        font-family: ${theme.fonts.main};
        font-weight: ${theme.font.bold};
        line-height: 1.2;

        ${variant && variantStyles[variant]}
        ${size !== null ? sizeStyles[size as Size] : sizeStyles.medium}
    `}
`;
