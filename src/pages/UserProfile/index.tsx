import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Box, Container, Heading, Text } from '../../components';
import { Link } from 'react-router-dom';
import { ButtonLink } from '../../components/Link';

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
        <Box >
          <ButtonLink as={Link} to="/">← Voltar</ButtonLink>

          <Box borderStyle="solid"
            borderWidth="0.5px"
            borderRadius="md"
            marginTop="1rem"
            background="white"
            p={4}
            backgroundImage="linear-gradient(rgba(255,255,255,0.8), rgba(255,255,255,0.8)), url('/profile-decoration.png')"
            backgroundPosition="right center"
            backgroundRepeat="no-repeat"
            backgroundSize="contain"
          >
            <Box display="flex" alignItems="center" marginBottom="1rem" gap="0.5rem">
              <Heading variant='primary' size="large">
                {user.name}
              </Heading>
              <Text variant='highlight'><strong>@{user.username}</strong></Text>
            </Box>
            <Box>
              <Heading size="small">Informações  básicas</Heading>
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

        </Box>
      </Container >
    );
  }
}

export const UserProfile = connector(UserProfileComponent);