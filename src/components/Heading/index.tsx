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

type HeadingProps = SpaceProps &
    ColorProps &
    TypographyProps &
    LayoutProps & {
        as?: React.ElementType;
        children: React.ReactNode;
        variant?: Variant;
        size?: Size;
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

export const Heading = styled.h1<HeadingProps>`
    ${({ theme, variant, size = 'medium' }) => css`
        margin: 0;
        font-family: ${theme.fonts.main};
        font-weight: ${theme.font.bold};
        line-height: 1.2;

        ${variant && variantStyles[variant]}
        ${size !== null ? sizeStyles[size as Size] : sizeStyles.medium}
        ${compose(space, color, typography, layout)};
    `}
`;

Heading.defaultProps = {
    as: 'h3',
    fontSize: 'medium',
};
