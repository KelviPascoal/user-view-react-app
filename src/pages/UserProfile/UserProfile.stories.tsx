import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { UserProfile } from './';
import { theme } from '../../styles/theme';

// Mock do Redux com user carregado
const initialStateWithUser = {
    users: {
        selectedUser: {
            id: 1,
            name: 'John Doe',
            username: 'johndoe',
            email: 'john@example.com',
            phone: '123-456-7890',
            website: 'johndoe.com',
            address: {
                street: 'Main St',
                suite: 'Apt 1',
                city: 'Metropolis',
                zipcode: '12345',
                geo: { lat: '12.3456', lng: '65.4321' },
            },
            company: {
                name: 'Acme Corp',
                catchPhrase: 'We make things happen',
                bs: 'innovation',
            },
        },
        loading: false,
    },
};

// Mock do Redux sem user selecionado
const initialStateWithoutUser = {
    users: {
        selectedUser: null,
        loading: true,
    },
};

// Cria store mockado
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createMockStore(initialState: any) {
    return createStore(() => initialState);
}

// Mock simples de i18n
const I18nProviderMock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const useTranslation = () => ({
        t: (key: string) => {
            const translations: Record<string, string> = {
                BASIC_INFORMATION: "Informações básicas",
                EMAIL: "Email",
                PHONE: "Telefone",
                WEBSITE: "Website",
                ADDRESS: "Endereço",
                GEO: "Geo",
                COMPANY: "Empresa",
                NAME: "Nome",
                PHRASE: "Frase",
                SECTOR: "Setor",
                BACK: "Voltar",
                NO_USERS_FOUND: "Nenhum usuário encontrado"
            };

            return translations[key] || key;
        },
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (React as any).useTranslation = useTranslation;

    return <>{children}</>;
};

export default {
    title: 'Pages/UserProfile',
    component: UserProfile,
};

// Template que simula a rota "/user/:id"
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (store: any) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <MemoryRouter initialEntries={['/user/1']}>
                <I18nProviderMock>
                    <Routes>
                        <Route path="/user/:id" element={<UserProfile />} />
                    </Routes>
                </I18nProviderMock>
            </MemoryRouter>
        </ThemeProvider>
    </Provider>
);

// Histórias
export const WithUser = () => Template(createMockStore(initialStateWithUser));
export const LoadingState = () => Template(createMockStore(initialStateWithoutUser));
