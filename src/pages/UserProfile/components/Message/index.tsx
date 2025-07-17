import { styled } from "styled-components";

export const Message = styled.p`
  text-align: center;
  margin-top: 80px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
`;