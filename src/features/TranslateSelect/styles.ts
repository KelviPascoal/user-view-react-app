import { css, styled } from "styled-components";

export const Wrapper = styled.div`
${({ theme }) => css`
  position: absolute;
  left: 2rem;
  top: 2rem;
  width: fit-content;

  @media (max-width: 1576px) {
    position: static;
  }

  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${theme.colors.background};
  padding: 0.5rem 1rem;
  border-radius: ${theme.border.radius};
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.1);
`}
`;

export const Select = styled.select`
  padding: 0.4rem 0.6rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.border.radius};
  font-size: ${({ theme }) => theme.font.sizes.small};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
`;