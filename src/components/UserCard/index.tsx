import React, { Component } from "react";
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

type UserCardProps = {
    user: User;
    handleSelectUser: (user: User) => void;
    handleAddFavorite: (user: User, isFavorite: boolean) => void;
    favorites: User[];
    isFavorite: boolean;
};

export class UserCard extends Component<UserCardProps> {
    render() {
        const { user, handleSelectUser, handleAddFavorite, isFavorite } = this.props;

        return (
            <Wrapper as="li" key={user.id}>
                <Flex direction="column" gap="0.2rem">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                    <span>{user.phone}</span>
                </Flex>
                <Flex gap="1rem">
                    <Button onClick={() => handleSelectUser(user)}>Detalhes</Button>
                    <FavoriteButton
                        onClick={() => handleAddFavorite(user, isFavorite)}
                        isFavorite={isFavorite}
                    />
                </Flex>
            </Wrapper>
        );
    }
}
