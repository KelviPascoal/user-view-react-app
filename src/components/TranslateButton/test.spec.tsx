import { screen, fireEvent } from '@testing-library/react';
import { TranslateButton } from './index';
import { render } from '../../utils/test-utils';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        i18n: {
            language: mockLanguage,
            changeLanguage: mockChangeLanguage,
        },
    }),
}));

const mockChangeLanguage = jest.fn();
let mockLanguage = 'en';

describe('TranslateButton', () => {
    beforeEach(() => {
        mockChangeLanguage.mockClear();
    });

    it('renders button with text to translate to Portuguese if it is in English', () => {
        mockLanguage = 'en';
        render(<TranslateButton />);
        expect(screen.getByRole('button')).toHaveTextContent('Traduzir para o portugues');
    });

    it('renders button with text to translate to English if it is in Portuguese', () => {
        mockLanguage = 'pt';
        render(<TranslateButton />);
        expect(screen.getByRole('button')).toHaveTextContent('Traduzir para o inglês');
    });

    it('switches to the correct language when clicking the button', () => {
        mockLanguage = 'en';
        render(<TranslateButton />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockChangeLanguage).toHaveBeenCalledWith('pt');
    });

    it('switches to the correct language when clicking the button when in pt', () => {
        mockLanguage = 'pt';
        render(<TranslateButton />);
        fireEvent.click(screen.getByRole('button'));
        expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });
});
