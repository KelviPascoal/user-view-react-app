import type { Preview } from '@storybook/react-webpack5'
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles/theme'
import { GlobalStyle } from '../src/styles/global'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme} >
        <GlobalStyle />
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;