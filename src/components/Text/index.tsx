import styled, { css } from 'styled-components';
import React from 'react';

type Variant = 'primary' | 'highlight';
type Size = 'small' | 'medium' | 'large';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
    as?: React.ElementType;
    children: React.ReactNode;
    variant?: Variant;
    size?: Size;

    margin?: string;
    padding?: string;
    color?: string;
    backgroundColor?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: string;
    lineHeight?: string;
    display?: string;
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

export const Text = styled.p<TextProps>`
  ${({ theme, variant, size = 'medium', ...props }) => css`
    margin: ${props.margin || '0'};
    padding: ${props.padding || '0'};
    color: ${props.color || 'inherit'};
    background-color: ${props.backgroundColor || 'transparent'};
    font-size: ${props.fontSize || theme.font.sizes.medium};
    font-family: ${theme.font.family};
    text-align: ${props.textAlign || 'left'};
    line-height: ${props.lineHeight || '1.5'};
    display: ${props.display || 'block'};
    width: ${props.width || 'auto'};
    height: ${props.height || 'auto'};

    ${variant && variantStyles[variant]}
    ${size && sizeStyles[size]}
  `}
`;
