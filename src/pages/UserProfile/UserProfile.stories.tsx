// UserProfile.stories.tsx
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { UserProfile } from './';
import { theme } from '../../styles/theme';

// Mock do Redux
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
    },
};

const initialStateWithoutUser = {
    users: {
        selectedUser: null,
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function reducer(state = initialStateWithUser, action: any) {
    switch (action.type) {
        default:
            return state;
    }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function createMockStore(initialState: any) {
    return createStore(reducer, initialState);
}

const I18nProviderMock: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const useTranslation = () => ({
        t: (key: string) => {
            const translations: Record<string, string> = {
                NO_USER_SELECTED: 'No user selected.',
                BACK: 'Back',
                BASIC_INFORMATION: 'Basic Information',
                EMAIL: 'Email',
                PHONE: 'Phone',
                WEBSITE: 'Website',
                ADDRESS: 'Address',
                GEO: 'Geo',
                COMPANY: 'Company',
                NAME: 'Name',
                PHRASE: 'Phrase',
                SECTOR: 'Sector',
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Template = (store: any) => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <MemoryRouter>
                <I18nProviderMock>
                    <UserProfile />
                </I18nProviderMock>
            </MemoryRouter>
        </ThemeProvider>
    </Provider>
);

export const WithUser = () => Template(createMockStore(initialStateWithUser));
export const WithoutUser = () => Template(createMockStore(initialStateWithoutUser));
