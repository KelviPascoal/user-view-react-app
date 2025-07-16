import { css, styled } from "styled-components";

export const Button = styled.button`
${({ theme }) => css`
  padding: 6px 12px;
  font-size: 14px;
  font-family: ${theme.fonts.main};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`}

`;