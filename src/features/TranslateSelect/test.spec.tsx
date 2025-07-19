import { screen, fireEvent } from '@testing-library/react';
import { TranslateSelect } from '.';
import { useTranslation } from 'react-i18next';
import { render } from '../../utils/test-utils';

jest.mock('react-i18next', () => ({
    useTranslation: jest.fn(),
}));

const mockChangeLanguage = jest.fn();

describe('<TranslateSelect />', () => {
    beforeEach(() => {
        (useTranslation as jest.Mock).mockReturnValue({
            i18n: {
                language: 'pt',
                changeLanguage: mockChangeLanguage,
            },
        });
    });

    it('renderiza com o idioma atual', () => {
        render(<TranslateSelect />);
        const select = screen.getByRole<HTMLSelectElement>('combobox');

        expect(select.value).toBe('pt');
    });

    it('chama changeLanguage ao mudar idioma', () => {
        render(<TranslateSelect />);
        const select = screen.getByRole<HTMLSelectElement>('combobox');

        fireEvent.change(select, { target: { value: 'en' } });
        expect(mockChangeLanguage).toHaveBeenCalledWith('en');
    });
});
