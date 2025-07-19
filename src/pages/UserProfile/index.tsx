import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Box, Container, Heading, Text } from '../../components';
import { Link } from 'react-router-dom';

const mapStateToProps = (state: RootState) => ({
  selectedUser: state.users.selectedUser,
});

const connector = connect(mapStateToProps);

type Props = ConnectedProps<typeof connector>;

class UserProfileComponent extends React.Component<Props> {
  render() {
    const { selectedUser: user } = this.props;

    if (!user) {
      return <Text>Nenhum usuário selecionado.</Text>;
    }

    return (
      <Container>
        <Box>
          <Link to="/">← Voltar</Link>

          <Heading as="h1" style={{ marginBottom: '16px' }}>
            {user.name} <small style={{ fontWeight: 'normal' }}>@{user.username}</small>
          </Heading>

          <Box>
            <Heading>Textrmações básicas</Heading>
            <Text><strong>Email:</strong> {user.email}</Text>
            <Text><strong>Telefone:</strong> {user.phone}</Text>
            <Text>
              <strong>Website:</strong>{' '}
              <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                {user.website}
              </a>
            </Text>
          </Box>

          <Box>
            <Heading>Endereço</Heading>
            <Text>{user.address.street}, {user.address.suite}</Text>
            <Text>{user.address.city} - {user.address.zipcode}</Text>
            <Text><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</Text>
          </Box>

          <Box>
            <Heading>Empresa</Heading>
            <Text><strong>Nome:</strong> {user.company.name}</Text>
            <Text><strong>Frase:</strong> {user.company.catchPhrase}</Text>
            <Text><strong>Setor:</strong> {user.company.bs}</Text>
          </Box>
        </Box>
      </Container>
    );
  }
}

export const UserProfile = connector(UserProfileComponent);