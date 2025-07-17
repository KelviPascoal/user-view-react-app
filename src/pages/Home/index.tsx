import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadUsersRequest, filterUsersByName, setSelectedUser, addFavorite, removeFavorite } from '../../store/modules/user/actions';
import { RootState } from '../../store/rootReducer';
import { User } from '../../store/modules/user/types';
import { Loader } from '../../components/Loader';
import { Container } from '../../components/Container';
import { SearchInput } from './components/Search';
import { UserCard } from './components/UserCard';
import { useNavigate } from 'react-router-dom';
import { Flex } from '../../components/Flex';
import { Button } from '../../components/Button';
import React from 'react';

export function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { filtered, loading, favorites } = useSelector((state: RootState) => state.users);
    const [showOnlyFavorites, setShowOnlyFavorites] = React.useState(false);

    useEffect(() => {
        dispatch(loadUsersRequest());
    }, [dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterUsersByName(e.target.value));
    };

    const handleSelectUser = React.useCallback((user: User) => {
        dispatch(setSelectedUser(user));
        navigate('/user-profile');
    }, [dispatch, navigate]);

    const handleAddFavorite = React.useCallback((user: User, isFavorite: boolean) => {
        if (!isFavorite) { dispatch(addFavorite(user)) } else dispatch(removeFavorite(user.id))
    }, [dispatch]);

    const filtredUsersFavorites = () => {
        if (favorites.length) {
            setShowOnlyFavorites(prev => !prev)
        } else {
            setShowOnlyFavorites(false)
        }
    }

    useEffect(() => {
        if (!favorites.length) {
            setShowOnlyFavorites(false)
        }

        return
    }, [favorites])

    return (
        <Container as="main">
            <Flex alignItens='center' justify-content="space-between" gap="1rem" margin="0 0 1rem 0">
                <SearchInput
                    handleSearch={handleSearch}
                />
                <Button onClick={() => filtredUsersFavorites()} disabled={!favorites.length}>
                    {!showOnlyFavorites ? 'Filtrar por favoritos' : 'Voltar a lista completa'}

                </Button>
            </Flex>

            {loading ? (
                <Loader />
            ) : (
                <>
                    {!showOnlyFavorites ? (
                        <Flex as="ul" direction="column" gap="1rem">
                            {filtered.map((user) => (
                                <UserCard
                                    key={user.id}
                                    user={user}
                                    handleSelectUser={() => handleSelectUser(user)}
                                    handleAddFavorite={() => handleAddFavorite(user, favorites.some((fav) => fav.id === user.id))}
                                    isFavorite={favorites.some((fav) => fav.id === user.id)}
                                />
                            ))}
                        </Flex>
                    ) : (
                        <Flex as="ul" direction="column" gap="1rem">
                            {favorites.map((user) => (
                                <UserCard
                                    key={user.id}
                                    user={user}
                                    handleSelectUser={() => handleSelectUser(user)}
                                    handleAddFavorite={() => handleAddFavorite(user, favorites.some((fav) => fav.id === user.id))}
                                    isFavorite={favorites.some((fav) => fav.id === user.id)}
                                />
                            ))}
                        </Flex>
                    )}
                </>

            )
            }

        </Container >
    );
}