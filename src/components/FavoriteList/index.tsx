import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { removeFavorite } from '../../store/modules/user/actions';
import { RootState } from '../../store/rootReducer';
import { User } from '../../store/modules/user/types';

const Wrapper = styled.div`
  flex: 1;
  background-color: #f9f9f9;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
  padding: 1rem;
  max-height: 500px;
  overflow-y: auto;
`;

const Title = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const FavoriteItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 0;
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border: none;
  padding: 4px 8px;
  border-radius: 4px;
  cursor: pointer;
`;

export function FavoriteList() {
    const dispatch = useDispatch();
    const favorites = useSelector((state: RootState) => state.users.favorites);

    const handleRemove = (id: number) => {
        dispatch(removeFavorite(id));
    };

    return (
        <Wrapper>
            <Title>Favoritos</Title>
            {favorites.length === 0 ? (
                <p>Nenhum favorito ainda.</p>
            ) : (
                favorites.map((user: User) => (
                    <FavoriteItem key={user.id}>
                        <span>{user.name}</span>
                        <Button onClick={() => handleRemove(user.id)}>Remover</Button>
                    </FavoriteItem>
                ))
            )}
        </Wrapper>
    );
}
