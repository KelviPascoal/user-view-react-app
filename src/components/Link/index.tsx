import styled, { css } from 'styled-components';
import {
    space,
    color,
    layout,
    typography,
    SpaceProps,
    ColorProps,
    LayoutProps,
    TypographyProps,
    compose,
} from 'styled-system';
import React from 'react';
import { darken } from 'polished';

type Variant = 'primary' | 'highlight';
type Size = 'small' | 'medium' | 'large';

type ButtonLinkProps = SpaceProps &
    ColorProps &
    LayoutProps &
    TypographyProps & {
        as?: React.ElementType;
        children: React.ReactNode;
        variant?: Variant;
        size?: Size;
        href?: string;
    };

const sizeStyles = {
    small: css`
        padding: 0.25rem 0.5rem;
        font-size: ${({ theme }) => theme.font.sizes.small};
    `,
    medium: css`
        padding: 0.5rem 1rem;
        font-size: ${({ theme }) => theme.font.sizes.medium};
    `,
    large: css`
        padding: 0.75rem 1.25rem;
        font-size: ${({ theme }) => theme.font.sizes.large};
    `,
};

export const Link = styled.a<ButtonLinkProps>`
    ${({ theme, size = 'medium' }) => css`
        display: inline-block;
        text-decoration: none;
        border: none;
        border-radius: ${theme.border.radius};
        font-family: ${theme.fonts.main};
        font-weight: ${theme.font.bold};
        cursor: pointer;
        transition: all 0.2s ease;
        color: ${theme.colors.accent};

        &:hover {
            color: ${darken(0.05, theme.colors.accent)};
        }
        
        ${size && sizeStyles[size as Size]}
        ${compose(space, color, layout, typography)}
    `}
`;

Link.defaultProps = {
    as: 'a',
    variant: 'primary',
    size: 'medium',
};