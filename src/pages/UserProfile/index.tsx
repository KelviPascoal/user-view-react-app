import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store';
import { Box, Card, Container, Heading, Spinner, Text } from '../../components';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { Link } from '../../components/Link';
import { useTranslation } from 'react-i18next';
import { IoIosArrowBack } from "react-icons/io";
import { loadUserRequest } from '../../store/modules/user/actions';

const mapStateToProps = (state: RootState) => ({
  selectedUser: state.users.selectedUser,
  loading: state.users.loading,
});

const mapDispatchToProps = {
  loadUserRequest,
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

interface Props extends PropsFromRedux {
  t: (key: string) => string;
  userId: number;
}

class UserProfileComponent extends React.Component<Props> {
  componentDidMount() {
    const { userId, loadUserRequest } = this.props;

    if (userId) {
      loadUserRequest(userId);
    }
  }

  render() {
    const { selectedUser: user, loading, t } = this.props;

    if (loading || !user) {
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
            {loading && <Spinner />
            }
          </Box>
        </Container>
      );
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
              <Heading variant="primary" size="large">{user.name}</Heading>
              <Text variant="highlight" size='large'>
                <strong>@{user.username}</strong>
              </Text>
            </Box>

            <Box display="flex" flexDirection={'column'} gap="1rem" marginTop="2rem">
              <Heading>{t('BASIC_INFORMATION')}</Heading>
              <Text><strong>{t('EMAIL')}:</strong> {user.email}</Text>
              <Text><strong>{t('PHONE')}:</strong> {user.phone}</Text>
              <Text>
                <strong>{t('WEBSITE')}:</strong>{' '}
                <a href={`https://${user.website}`} target="_blank" rel="noopener noreferrer">
                  {user.website}
                </a>
              </Text>
            </Box>

            <Box display="flex" flexDirection={'column'} gap="1rem" marginTop="2rem">
              <Heading>{t('ADDRESS')}</Heading>
              <Text>{user.address.street}, {user.address.suite}</Text>
              <Text>{user.address.city} - {user.address.zipcode}</Text>
              <Text><strong>{t('GEO')}:</strong> {user.address.geo.lat}, {user.address.geo.lng}</Text>
            </Box>

            <Box display="flex" flexDirection={'column'} gap="1rem" marginTop="2rem">
              <Heading>{t('COMPANY')}</Heading>
              <Text><strong>{t('NAME')}:</strong> {user.company.name}</Text>
              <Text><strong>{t('PHRASE')}:</strong> {user.company.catchPhrase}</Text>
              <Text><strong>{t('SECTOR')}:</strong> {user.company.bs}</Text>
            </Box>
          </Card>
        </Box>
      </Container>
    );
  }
}

// Wrapper funcional para usar useParams e useTranslation e injetar no componente de classe
const UserProfileWrapper = (props: PropsFromRedux) => {
  const { t } = useTranslation();
  const params = useParams<{ id: string }>();
  const userId = params.id ? Number(params.id) : 0;

  return <UserProfileComponent {...props} t={t} userId={userId} />;
};

export const UserProfile = connector(UserProfileWrapper);
