import React, { Component } from 'react';
import styled from 'styled-components';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Container } from '../../components/Container';
import { BackLink } from '../../components/BackLink';

export const Wrapper = styled.div`
  padding: 0 16px;
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

const mapStateToProps = (state: RootState) => ({
  selectedUser: state.users.selectedUser,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class UserProfileComponent extends Component<Props> {
  render() {
    const { selectedUser: user } = this.props;

    if (!user) {
      return <Message>Nenhum usuário selecionado.</Message>;
    }

    return (
      <Container>
        <Wrapper>

          <BackLink to="/">← Voltar</BackLink>

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
            <Info><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</Info>
          </Section>

          <Section>
            <Subtitle>Empresa</Subtitle>
            <Info><strong>Nome:</strong> {user.company.name}</Info>
            <Info><strong>Frase:</strong> {user.company.catchPhrase}</Info>
            <Info><strong>Setor:</strong> {user.company.bs}</Info>
          </Section>
        </Wrapper>
      </Container>
    );
  }
}

export const UserProfile = connector(UserProfileComponent);