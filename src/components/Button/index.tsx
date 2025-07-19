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
  `,
  secondary: css`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.black};
  `,
  highlight: css`
    background-color: ${({ theme }) => theme.colors.highlight};
    color: ${({ theme }) => theme.colors.black};
  `
};

export const Button = styled.button<ButtonProps>`
${({ theme, variant, disabled }) => css`
  padding: ${`${theme.spacings.xxxsmall} ${theme.spacings.xxsmall}`};
  font-size: ${theme.font.sizes.small};
  font-family: ${theme.font.family};
  border: none;
  border-radius: ${theme.border.radius};
  cursor: ${disabled ? 'not-allowed' : 'pointer'};
  white-space: nowrap;

  ${variantStyles[variant || 'primary']}
`}

`;