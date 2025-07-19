import { darken } from "polished";
import { css, styled } from "styled-components";

type ButtonVariant = 'primary' | 'secondary' | 'highlight';

interface ButtonProps {
  variant?: ButtonVariant;
  disabled?: boolean;
}

const variantStyles = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background-color: ${({ theme }) => darken(0.2, theme.colors.primary)};
    }
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.colors.secondary)};
    }
  `,
  highlight: css`
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      background-color: ${({ theme }) => darken(0.1, theme.colors.highlight)};
    }
  `
};

const disabledStyles = css`
  opacity: 0.6;
  cursor: not-allowed;
  filter: grayscale(50%);

  &:hover {
    background-color: ${({ theme }) => darken(0.5, theme.colors.background)};
  }
`;

export const Button = styled.button<ButtonProps>`
  ${({ theme, variant, disabled }) => css`
    padding: ${`${theme.spacings.xxsmall} ${theme.spacings.xsmall}`};
    font-size: ${theme.font.sizes.small};
    font-family: ${theme.font.family};
    border: none;
    border-radius: ${theme.border.radius};
    cursor: pointer;
    white-space: nowrap;
    transition: background-color 0.3s ease;

    ${variantStyles[variant || 'primary']}
    ${disabled && disabledStyles}
  `}
`;
