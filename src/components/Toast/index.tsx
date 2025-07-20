import styled, { css } from 'styled-components';

const ToastWrapper = styled.div`
${({ theme }) => css`
  position: absolute;
  top: 0rem;
  left: 50%;
  transform: translateX(-50%);
  background: ${theme.colors.error};
  color: ${theme.colors.black};
  padding: 1rem 2rem;
  border-radius: ${theme.border.radius};
  font-size: ${theme.font.sizes.medium};
  z-index: 9999;
  animation: fadein 0.3s, fadeout 0.3s 2.7s;
`}
`;

interface ToastProps {
    statusError: string;
}

export function Toast({ statusError }: ToastProps) {

    return (
        <ToastWrapper>
            {statusError}
        </ToastWrapper>
    );
};