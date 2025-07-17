import React from "react";
import { styled } from "styled-components";
import { FavoriteButton } from "../FavoriteButton";
import { User } from "../../../../store/modules/user/types";
import { Button, Flex } from "../../../../components";

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
    handleSelectUser: () => void;
    handleAddFavorite: () => void;
    isFavorite: boolean;
    buttonDetailsText: string
};

export class UserCard extends React.Component<UserCardProps> {
    render() {
        const { user, handleSelectUser, handleAddFavorite, isFavorite, buttonDetailsText } = this.props;

        return (
            <Wrapper as="li" key={user.id}>
                <Flex direction="column" gap="0.2rem">
                    <strong>{user.name}</strong>
                    <span>{user.email}</span>
                    <span>{user.phone}</span>
                </Flex>
                <Flex gap="1rem">
                    <Button onClick={handleSelectUser}>{buttonDetailsText}</Button>
                    <FavoriteButton
                        onClick={handleAddFavorite}
                        isFavorite={isFavorite}
                    />
                </Flex>
            </Wrapper>
        );
    }
}
