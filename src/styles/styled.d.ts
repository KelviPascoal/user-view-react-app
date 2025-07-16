// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            primary: string;
            accent: string;
            background: string;
            text: string;
            border: string;
            highlight: string;
        };
        fonts: {
            main: string;
            heading: string;
        };
        spacing: {
            small: string;
            medium: string;
            large: string;
        };
    }
}
