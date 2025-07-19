import React, { JSX } from "react";
import { styled } from "styled-components";
import { User } from "../../store/modules/user/types";
import { Box, Heading, Text } from "../";

const Wrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 1rem;
  border-radius: 8px;


  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

    @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

type UserCardProps = {
    as?: keyof JSX.IntrinsicElements;
    user: User;
    sideItems: React.ReactNode;
};

export class UserCard extends React.Component<UserCardProps> {
    render() {
        const { user, sideItems, as } = this.props;

        return (
            <Wrapper as={as || 'div'} key={user.id}>
                <Box display="flex" flexDirection="column" gap="0.2rem">
                    <Heading>{user.name}</Heading>
                    <Text>{user.email}</Text>
                    <Text>{user.phone}</Text>
                </Box>
                <Box display="flex" gap="1rem" margin="0.5rem 0 0 auto">
                    {sideItems}
                </Box>
            </Wrapper>
        );
    }
}
