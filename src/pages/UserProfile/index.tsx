import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Box, Card, Container, Heading, Text } from '../../components';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '../../components/Link';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from "react-icons/io";

const mapStateToProps = (state: RootState) => ({
  selectedUser: state.users.selectedUser,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  t: (key: string) => string;
}

class UserProfileComponent extends React.Component<Props> {
  render() {
    const { selectedUser: user, t } = this.props;

    if (!user) {
      return (
        <Container>
          <Box display="flex" alignItems="center" gap="0.5rem" marginY={'1rem'}>
            <Link as={RouterLink} to="/">
              <Box display="flex" alignItems="center" gap="0.5rem">
                <IoIosArrowBack /><Text>{t('BACK')}</Text>
              </Box>
            </Link>
          </Box>
          <Box display="flex" flexDirection="column" alignItems="center" gap="16px">
            <Text>{t('NO_USERS_FOUND') || 'Nenhum usuário selecionado.'}</Text>;
          </Box>
        </Container>
      )
    }

    return (
      <Container>
        <Box>
          <Box display="flex" alignItems="center" gap="0.5rem" marginY={'1rem'}>
            <Link as={RouterLink} to="/">
              <Box display="flex" alignItems="center" gap="0.5rem">
                <IoIosArrowBack /><Text>{t('BACK')}</Text>
              </Box>
            </Link>
          </Box>

          <Card>
            <Box display="flex" alignItems="flex-end" marginBottom="1rem" gap="1rem">
              <Heading variant="primary" size="large">
                {user.name}
              </Heading>
              <Text variant="highlight" size='large'>
                <strong>@{user.username}</strong>
              </Text>
            </Box>

            <Box display="flex" flexDirection={'column'} gap="1rem" marginTop="2rem">
              <Heading >{t('BASIC_INFORMATION')}</Heading>
              <Text>
                <strong>{t('EMAIL')}:</strong> {user.email}
              </Text>
              <Text>
                <strong>{t('PHONE')}:</strong> {user.phone}
              </Text>
              <Text>
                <strong>{t('WEBSITE')}:</strong>{' '}
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </Text>
            </Box>

            <Box display="flex" flexDirection={'column'} gap="1rem" marginTop="2rem">
              <Heading>{t('ADDRESS')}</Heading>
              <Text>
                {user.address.street}, {user.address.suite}
              </Text>
              <Text>
                {user.address.city} - {user.address.zipcode}
              </Text>
              <Text>
                <strong>{t('GEO')}:</strong> {user.address.geo.lat}, {user.address.geo.lng}
              </Text>
            </Box>

            <Box display="flex" flexDirection={'column'} gap="1rem" marginTop="2rem">
              <Heading>{t('COMPANY')}</Heading>
              <Text>
                <strong>{t('NAME')}:</strong> {user.company.name}
              </Text>
              <Text>
                <strong>{t('PHRASE')}:</strong> {user.company.catchPhrase}
              </Text>
              <Text>
                <strong>{t('SECTOR')}:</strong> {user.company.bs}
              </Text>
            </Box>
          </Card>
        </Box >
      </Container >
    );
  }
}

const UserProfileWrapper = (props: PropsFromRedux) => {
  const { t } = useTranslation();

  return <UserProfileComponent {...props} t={t} />;
};

export const UserProfile = connector(UserProfileWrapper);
