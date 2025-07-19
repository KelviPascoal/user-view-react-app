import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    loadUsersRequest,
    setSelectedUser,
    addFavorite,
    removeFavorite
} from '../../store/modules/user/actions';
import { RootState } from '../../store/rootReducer';
import { User } from '../../store/modules/user/types';
import { useNavigate } from 'react-router-dom';
import { Spinner, Container, Box, Button } from '../../components';
import { UserCard } from '../../components';
import { useTranslation } from 'react-i18next';
import { Input } from '../../components/Input';
import { FavoriteButton } from '../../features';

export function Home() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { filtered, loading, favorites } = useSelector((state: RootState) => state.users);
    const [showOnlyFavorites, setShowOnlyFavorites] = React.useState(false);
    const [searchTerm, setSearchTerm] = React.useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleSelectUser = React.useCallback((user: User) => {
        dispatch(setSelectedUser(user));
        navigate('/user-profile');
    }, [dispatch, navigate]);

    const handleAddFavorite = React.useCallback((user: User, isFavorite: boolean) => {
        if (!isFavorite) {
            dispatch(addFavorite(user));
        } else {
            dispatch(removeFavorite(user.id));
        }
    }, [dispatch]);

    const filtredUsersFavorites = () => {
        if (favorites.length) {
            setShowOnlyFavorites(prev => !prev);
        } else {
            setShowOnlyFavorites(false);
        }
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

    React.useEffect(() => {
        if (!favorites.length) {
            setShowOnlyFavorites(false);
        }
    }, [favorites]);

    return (
        <Container as="main">
            <Box display="flex" alignItems='center' justify-content="space-between" gap="1rem" margin="0 0 1rem 0">
                <Input onChange={handleSearch} placeholder='Buscar por nome' />
                <Button onClick={filtredUsersFavorites} disabled={!favorites.length}>
                    {!showOnlyFavorites ? t('FILTER_BY_FAVORITE') : t('BACK_TO_FULL_LIST')}
                </Button>
            </Box>

            {loading ? (
                <Spinner />
            ) : (
                <Box as="ul" display="flex" flexDirection="column" gap="1rem">
                    {filteredList.map((user) => (
                        <UserCard
                            as="li"
                            key={user.id}
                            user={user}
                            sideItems={
                                <Box display="flex" gap="1rem" height={'100%'}>
                                    <Button onClick={() => handleSelectUser(user)}>{t('DETAILS')}</Button>
                                    <FavoriteButton
                                        onClick={() => handleAddFavorite(user, checkIfFavorite(user, favorites))}
                                        isFavorite={checkIfFavorite(user, favorites)}
                                    />
                                </Box>
                            }
                        />
                    ))}
                </Box>
            )}
        </Container>
    );
}
