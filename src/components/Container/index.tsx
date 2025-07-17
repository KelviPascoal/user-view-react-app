import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px; 
  margin: 0 auto;    
  width: 100%;
  padding-top: 1rem; 

  @media (max-width: 1024px) {
  padding-left: 1rem;
  padding-right: 1rem;
  }
`;