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

const disabledStyles = css`
  opacity: 0.6;
  cursor: not-allowed;
  filter: grayscale(50%);
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

  ${variantStyles[variant || 'primary']}
  ${disabled && disabledStyles}
`}
`;