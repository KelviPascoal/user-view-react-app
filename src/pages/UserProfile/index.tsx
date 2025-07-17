import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom'; // ou next/router se Next.js
import { Container } from '../../components/Container';

export function UserProfile() {
    const user = useSelector((state: RootState) => state.users.selectedUser);
    const navigate = useNavigate();

    if (!user) {
        return <Message>Nenhum usuário selecionado.</Message>;
    }

    return (
        <Container>
            <BackButton onClick={() => {
                navigate('/');
            }}>
                ← Voltar
            </BackButton>

            <Title>{user.name}</Title>
            <Section>
                <Subtitle>Informações básicas</Subtitle>
                <Info><strong>Email:</strong> {user.email}</Info>
                <Info><strong>Telefone:</strong> {user.phone}</Info>
            </Section>

            <Section>
                <Subtitle>Endereço</Subtitle>
                <Info>{user.address.street}, {user.address.suite}</Info>
                <Info>{user.address.city} - {user.address.zipcode}</Info>
            </Section>

            <Section>
                <Subtitle>Empresa</Subtitle>
                <Info><strong>Nome:</strong> {user.company.name}</Info>
                <Info><strong>Frase:</strong> {user.company.catchPhrase}</Info>
                <Info><strong>Setor:</strong> {user.company.bs}</Info>
            </Section>
        </Container>
    );
};

const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  font-size: 14px;
  margin-bottom: 16px;
  &:hover {
    text-decoration: underline;
  }
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 24px;
`;

const Section = styled.section`
  margin-bottom: 24px;
`;

const Subtitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  margin-bottom: 8px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding-bottom: 4px;
`;

const Info = styled.p`
  font-family: ${({ theme }) => theme.fonts.main};
  margin: 4px 0;
`;

const Message = styled.p`
  text-align: center;
  margin-top: 80px;
  font-family: ${({ theme }) => theme.fonts.main};
  color: ${({ theme }) => theme.colors.text};
`;