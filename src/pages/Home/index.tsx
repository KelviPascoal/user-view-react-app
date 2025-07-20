import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadUsersRequest,
    addFavorite,
    removeFavorite
} from '../../store/modules/user/actions';
import { RootState } from '../../store/rootReducer';
import { User } from '../../store/modules/user/types';
import { useNavigate } from 'react-router-dom';
import { Spinner, Container, Box, Button, Text } from '../../components';
import { UserCard } from '../../components';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components/Input';
import { FavoriteButton } from '../../features';
import { useIsMobile } from '../../hooks/useIsMobile';

export function Home() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useIsMobile();

    const { filtered, loading, favorites } = useSelector((state: RootState) => state.users);
    const [showOnlyFavorites, setShowOnlyFavorites] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSelectUser = React.useCallback((id: string) => {
        navigate(`/user-profile/${id}`);
    }, [navigate]);

    const handleAddFavorite = (user: User, isFavorite: boolean) => {
        if (!isFavorite) {
            dispatch(addFavorite(user));
        } else {
            dispatch(removeFavorite(user.id));
        }
    }

    const filtredUsersFavorites = () => {
        setShowOnlyFavorites(prev => !prev);
    };

    const filteredList = React.useMemo(() => {
        const baseList = showOnlyFavorites ? favorites : filtered;

        return baseList.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm, showOnlyFavorites, filtered, favorites]);

    const checkIfFavorite = (user: User, favorites: User[]) => {
        return favorites.some(fav => fav.id === user.id);
    }

    React.useEffect(() => {
        dispatch(loadUsersRequest());
    }, [dispatch]);

    return (
        <Container as="main">
            <Box display="flex" flexDirection={{ _: 'column', xs: 'row' }} alignItems='center' justify-content="space-between" gap="1rem" margin="0 0 1rem 0">
                <Input onChange={handleSearch} placeholder={t('SEARCH_BY_NAME')} />
                <Button fullWidth={isMobile} onClick={filtredUsersFavorites}>
                    {!showOnlyFavorites ? t('FILTER_BY_FAVORITE') : t('BACK_TO_FULL_LIST')}
                </Button>
            </Box>

            {loading ? (
                <Spinner />
            ) : (
                <Box as="ul" display="flex" flexDirection="column" gap="1rem">
                    {filteredList.length ? filteredList.map((user) => (
                        <UserCard
                            as="li"
                            key={user.id}
                            user={user}
                            sideItems={
                                <Box display="flex" gap="1rem" height={'100%'}>
                                    <Button onClick={() => handleSelectUser(String(user.id))}>{t('DETAILS')}</Button>
                                    <FavoriteButton
                                        onClick={() => handleAddFavorite(user, checkIfFavorite(user, favorites))}
                                        isFavorite={checkIfFavorite(user, favorites)}
                                    />
                                </Box>
                            }
                        />
                    )) : (
                        <Box display={'flex'} justifyContent="center" alignItems="center" height="100%">
                            <Text>
                                {t('NO_USERS_FOUND')}
                            </Text>
                        </Box>
                    )}

                </Box>
            )}
        </Container>
    );
}
