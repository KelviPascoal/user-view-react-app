import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadUsersRequest, filterUsersByName, setSelectedUser, addFavorite, removeFavorite } from '../../store/modules/user/actions';
import { RootState } from '../../store/rootReducer';
import { User } from '../../store/modules/user/types';
import { Loader } from '../../components/Loader';
import { FavoriteList } from '../../components/FavoriteList';
import { Container } from '../../components/Container';
import { SearchInput } from '../../components/Search';
import { UserCard } from '../../components/UserCard';
import { useNavigate } from 'react-router-dom';
import { Flex } from '../../components/Flex';

export function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { filtered, loading, favorites } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(loadUsersRequest());
    }, [dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterUsersByName(e.target.value));
    };

    const handleSelectUser = (user: User) => {
        dispatch(setSelectedUser(user));
        navigate('/user-profile');
    };

    const handleAddFavorite = (user: User, isFavorite: boolean) => {
        if (!isFavorite) { dispatch(addFavorite(user)) } else dispatch(removeFavorite(user.id))
    };

    return (
        <Container as="main">
            <SearchInput
                handleSearch={handleSearch}
            />

            {loading ? (
                <Loader />
            ) : (
                <Flex as="ul" direction="column" gap="1rem">
                    {filtered.map((user) => (
                        <UserCard
                            key={user.id}
                            user={user}
                            handleSelectUser={handleSelectUser}
                            handleAddFavorite={handleAddFavorite}
                            isFavorite={favorites.some((fav) => fav.id === user.id)}
                            favorites={favorites}
                        />
                    ))}
                </Flex>
            )
            }

            <FavoriteList />
        </Container >
    );
}