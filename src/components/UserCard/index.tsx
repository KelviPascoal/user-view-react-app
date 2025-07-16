import { styled } from "styled-components";
import { Button } from "../Button";
import { FavoriteButton } from "../FavoriteButton";
import { Flex } from "../Flex";
import { User } from "../../store/modules/user/types";

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

type UserCardProps = {
    user: User
    handleSelectUser: (user: User) => void;
    handleAddFavorite: (user: User, isFavorite: boolean) => void;
    favorites: User[];
    isFavorite: boolean;
}

export function UserCard({ user, handleSelectUser, handleAddFavorite, isFavorite }: UserCardProps) {
    return (
        <Wrapper key={user.id}>
            <Content>
                <strong>{user.name}</strong>
                <span>{user.email}</span>
                <span>{user.phone}</span>
            </Content>
            <Flex gap='1rem'>
                <Button onClick={() => handleSelectUser(user)}>Detalhes</Button>
                <FavoriteButton onClick={() => handleAddFavorite(user, isFavorite)}
                    isFavorite={isFavorite}
                />
            </Flex>
        </Wrapper>
    )
}