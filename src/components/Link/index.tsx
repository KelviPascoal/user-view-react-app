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
    width: fit-content;
    text-decoration: none;
    font-family: ${theme.fonts.main};
    cursor: pointer;
    transition: all 0.2s ease;
    color: ${props.color || theme.colors.accent};
    margin: ${props.margin || '0'};

    &:hover {
      color: ${darken(0.05, props.color || theme.colors.accent)};
    }

    ${size && sizeStyles[size]}
  `}
`;
