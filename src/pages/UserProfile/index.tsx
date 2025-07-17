import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Container, BackLink } from '../../components';
import { Wrapper, Info, Message, Section, Subtitle, Title, } from './components';

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