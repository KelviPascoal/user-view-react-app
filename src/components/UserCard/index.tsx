import React, { JSX } from "react";
import { User } from "../../store/modules/user/types";
import { Box, Heading, Text } from "../";
import { Card } from "../Card";

type UserCardProps = {
    as?: keyof JSX.IntrinsicElements;
    user: User;
    sideItems: React.ReactNode;
};

export class UserCard extends React.Component<UserCardProps> {
    render() {
        const { user, sideItems, as } = this.props;

        return (
            <Card as={as || 'div'} key={user.id}>
                <Box
                    display={'flex'}
                    flexDirection={{ _: 'column', lg: 'row' }}
                    alignItems={{ _: 'flex-start', lg: 'center' }}
                    gap="1rem"
                >

                    <Box display="flex" flexDirection="column" gap="0.2rem">
                        <Heading>{user.name}</Heading>
                        <Text>{user.email}</Text>
                        <Text>{user.phone}</Text>
                    </Box>

                    <Box marginLeft="auto">
                        {sideItems}
                    </Box>
                </Box>
            </Card>
        );
    }
}
