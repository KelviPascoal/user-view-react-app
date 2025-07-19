// src/pages/Home/Home.stories.tsx
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { createStore, combineReducers } from 'redux';
import { Home } from '.';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../i18n/i18n';

// Defina só o que precisa para o mock de estado
const initialUsersState = {
    filtered: [
        {
            id: 1,
            name: 'Kelvi Pascoal',
            username: 'kelvi',
            email: 'kelvi@example.com',
            phone: '123-4567',
            website: 'kelvi.dev',
            address: {
                street: 'Rua A',
                suite: '123',
                city: 'Cidade',
                zipcode: '00000',
                geo: { lat: '0', lng: '0' },
            },
            company: {
                name: 'Compania X',
                catchPhrase: 'Frase legal',
                bs: 'Setor Y',
            },
        },
    ],
    favorites: [],
    selectedUser: null,
    loading: false,
};

function usersReducer(state = initialUsersState) {
    return state;
}

const rootReducer = combineReducers({
    users: usersReducer,
});

const store = createStore(rootReducer);

export default {
    title: 'Pages/Home',
    component: Home,
    decorators: [
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (Story: any) => (
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <MemoryRouter>
                        <Story />
                    </MemoryRouter>
                </I18nextProvider>
            </Provider>
        ),
    ],
};

export const Default = () => <Home />;
