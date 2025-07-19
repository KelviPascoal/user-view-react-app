import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

export type InputProps = InputHTMLAttributes<HTMLInputElement>;

const StyledInput = styled.input<InputProps>`
  ${({ theme, disabled }) => css`
    width: 100%;
    padding: 8px;
    border-radius: ${theme.border.radius};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    border: 1px solid ${theme.colors.border};
    outline: none;
    background-color: ${disabled ? theme.colors.secondary : theme.colors.background};
    color: ${disabled ? theme.colors.border : theme.colors.black};
    cursor: ${disabled ? 'not-allowed' : 'text'};
    opacity: ${disabled ? 0.6 : 1};
    filter: ${disabled ? 'grayscale(30%)' : 'none'};
    transition:
      border-color ${theme.transition.default},
      box-shadow ${theme.transition.default},
      background-color ${theme.transition.default},
      opacity ${theme.transition.default};

    &:focus {
      border-color: ${disabled ? theme.colors.border : theme.colors.primary};
      box-shadow: ${disabled ? 'none' : `0 0 0 2px ${theme.colors.primary}40`};
    }
  `}
`;

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
