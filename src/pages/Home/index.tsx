import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { loadUsersRequest, filterUsersByName, setSelectedUser, addFavorite, removeFavorite } from '../../store/modules/user/actions';
import { RootState } from '../../store/rootReducer';
import { User } from '../../store/modules/user/types';
import { Loader } from '../../components/Loader';
import { FavoriteList } from '../../components/FavoriteList';
import { Container } from '../../components/Container';
import { SearchInput } from '../../components/Search';
import { UserCard } from '../../components/UserCard';

const Content = styled.div`
  flex: 2;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export function Home() {
    const dispatch = useDispatch();
    const { filtered, loading, favorites } = useSelector((state: RootState) => state.users);

    useEffect(() => {
        dispatch(loadUsersRequest());
    }, [dispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filterUsersByName(e.target.value));
    };

    const handleSelectUser = (user: User) => {
        dispatch(setSelectedUser(user));
    };

    const handleAddFavorite = (user: User, isFavorite: boolean) => {
        if (!isFavorite) { dispatch(addFavorite(user)) } else dispatch(removeFavorite(user.id))
    };

    return (
        <Container>
            <Content>
                <SearchInput
                    handleSearch={handleSearch}
                />

                {loading ? (
                    <Loader />
                ) : (
                    <List>
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
                    </List>
                )}
            </Content>

            <FavoriteList />
        </Container>
    );
}