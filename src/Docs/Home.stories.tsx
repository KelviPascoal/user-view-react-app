import { Box, Card, Container, Heading, Link, Text } from "../components";

export default {
    title: 'Bem vindo',
};

export const Main = () => (
    <Container>
        <Box display="flex" flexDirection="column" alignItems="center" gap="16px">
            <Heading size="large" variant="primary">Bem-vindo ao Storybook do User View</Heading>
            <Heading>Kelvi Pascoal | User View</Heading>
            <Text>
                Aplicação React para listagem, busca, favoritos e visualização de usuários — com Redux, Saga, styled-components e i18n.
            </Text>

            <Card>
                <Text size="medium" variant="primary">Links úteis:</Text>
                <Box display="flex" flexDirection="column" gap="8px">
                    <Link href="https://kelvi-pascoal-user-view.vercel.app" target="_blank" rel="noreferrer">
                        Página Principal do Projeto
                    </Link>
                    <Link href="https://kelvi-pascoal-user-view-docs.vercel.app/" target="_blank" rel="noreferrer">
                        Storybook Online
                    </Link>
                    <Link href="https://github.com/KelviPascoal/user-view-react-app" target="_blank" rel="noreferrer">
                        Repositório no GitHub
                    </Link>
                </Box>
            </Card>

            <Text>
                Explore nosso Storybook e descubra todos os componentes reutilizáveis que deram vida ao projeto
            </Text>
            <Text>
                Veja como cada peça foi cuidadosamente construída para garantir uma experiência consistente e eficiente
            </Text>
        </Box>
    </Container>
);
