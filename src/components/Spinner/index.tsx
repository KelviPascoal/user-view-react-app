import styled, { css, keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerBase = styled.div`
${({ theme }) => css`
  border: 4px solid ${theme.colors.border};
  border-top: 4px solid ${theme.colors.primary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  margin: 2rem auto;
`}
`;

export function Spinner() {
  return <SpinnerBase data-testid="spinner" />;
}