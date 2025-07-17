import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const BackLink = styled(Link)`
  display: inline-block;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 16px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;