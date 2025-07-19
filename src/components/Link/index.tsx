import styled, { css } from 'styled-components';
import React from 'react';
import { darken } from 'polished';

type Size = 'small' | 'medium' | 'large';

export interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    as?: React.ElementType;
    children: React.ReactNode;
    size?: Size;
    href?: string;
    margin?: string;
    padding?: string;
    color?: string;
    backgroundColor?: string;
    border?: string;
    borderRadius?: string;
    fontSize?: string;
    fontWeight?: string;
    width?: string;
    height?: string;
    textAlign?: string;
    display?: string;
    lineHeight?: string;
}

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
  ${({ theme, size = 'medium', ...props }) => css`
    display: ${props.display || 'inline-block'};
    text-decoration: none;
    border: ${props.border || 'none'};
    border-radius: ${props.borderRadius || theme.border.radius};
    font-family: ${theme.fonts.main};
    font-weight: ${props.fontWeight || theme.font.bold};
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${props.color || theme.colors.accent};
    background-color: ${props.backgroundColor || 'transparent'};
    margin: ${props.margin || '0'};
    padding: ${props.padding || ''};
    width: ${props.width || 'auto'};
    height: ${props.height || 'auto'};
    font-size: ${props.fontSize || 'inherit'};
    text-align: ${props.textAlign || 'left'};
    line-height: ${props.lineHeight || 'normal'};

    &:hover {
      color: ${darken(0.05, props.color || theme.colors.accent)};
    }

    ${size && sizeStyles[size]}
  `}
`;
