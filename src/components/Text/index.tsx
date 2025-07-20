import styled, { css } from 'styled-components';
import React from 'react';

export type Variant = 'primary' | 'highlight';
export type Size = 'small' | 'medium' | 'large';

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
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
  ${({ variant, size = 'medium' }) => css`


    ${variant && variantStyles[variant]}
    ${size && sizeStyles[size]}
  `}
`;
