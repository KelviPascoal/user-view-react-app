import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    font-family: ${({ theme }) => theme.fonts.main};
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    min-height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    margin-bottom: ${({ theme }) => theme.spacing.medium};
    color: ${({ theme }) => theme.colors.primary};
  }

  p {
    margin-bottom: ${({ theme }) => theme.spacing.medium};
  }

  ul, li {
    list-style: none;
    margin: 0;
    padding: 0;
    padding-left: 0;
    margin-left: 0;
  }

  h1 {
  font-size: 1.8rem;
  @media (min-width: 768px) {
    font-size: 2.5rem;
    }
  }

  h2 {
    font-size: 1.5rem;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1rem;
    @media (min-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;
