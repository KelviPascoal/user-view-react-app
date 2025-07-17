import { styled } from "styled-components";

export const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 4px;
`;