import { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
};

const StyledInput = styled.input<InputProps>`
${({ theme, disabled }) => css`
  width: 100%;
  padding: 8px;
  border-radius: ${theme.border.radius};
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  border: 1px solid ${theme.colors.border};
  border - radius: ${({ theme }) => theme.border.radius};
  outline: none;
  background - color: ${disabled ? theme.colors.secondary : theme.colors.background};
  color: ${disabled ? theme.colors.border : theme.colors.black};
  transition: border - color ${({ theme }) => theme.transition.default},
  box-shadow ${({ theme }) => theme.transition.default};
`}
`

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
};