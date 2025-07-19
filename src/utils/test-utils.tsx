import React, { ReactNode } from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../store';
import { theme } from '../styles/theme';
import '@testing-library/jest-dom';

interface AllTheProvidersProps {
    children: ReactNode;
}

function AllTheProviders({ children }: AllTheProvidersProps) {
    return (
        <ReduxProvider store={store}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ReduxProvider>
    );
}

const customRender = (
    ui: React.ReactElement,
    options?: Omit<RenderOptions, 'wrapper'>
) => rtlRender(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';

export { customRender as render };