import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { Provider } from 'react-redux';
import { store } from './store';
import { GlobalStyle } from './styles/global';
import './i18n/i18n'

type ProvidersProps = {
    children: React.ReactNode
}

export function Providers({ children }: ProvidersProps) {

    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <GlobalStyle />
                {children}
            </Provider>
        </ThemeProvider>
    );
}
