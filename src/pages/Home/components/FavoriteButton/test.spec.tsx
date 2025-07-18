// src/pages/Users/components/FavoriteButton/FavoriteButton.spec.tsx
import { screen, fireEvent } from '@testing-library/react';
import { render } from '../../../../utils/test-utils';
import { FavoriteButton } from './';

import '@testing-library/jest-dom';

// Mock i18n translations
jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            const translations: Record<string, string> = {
                ADD_TO_FAVORITE: 'Add to favorites',
                REMOVE_FROM_FAVORITE: 'Remove from favorites',
                FAVORITE: 'Favorited',
            };
            return translations[key] || key;
        },
    }),
}));

describe('FavoriteButton component', () => {
    it('renders with default text when not favorite', () => {
        render(
            <FavoriteButton isFavorite={false} onClick={() => { }} />
        );

        expect(screen.getByRole('button')).toHaveTextContent('Add to favorites');
    });

    it('renders "Favorited" when isFavorite is true and not hovering', () => {
        render(
            <FavoriteButton isFavorite={true} onClick={() => { }} />
        );

        expect(screen.getByRole('button')).toHaveTextContent('Favorited');
    });

    it('renders "Remove from favorites" when hovering and isFavorite is true', () => {
        render(
            <FavoriteButton isFavorite={true} onClick={() => { }} />
        );

        const button = screen.getByRole('button');
        fireEvent.mouseEnter(button);

        expect(button).toHaveTextContent('Remove from favorites');
    });

    it('calls onClick when clicked', () => {
        const handleClick = jest.fn();
        render(
            <FavoriteButton isFavorite={false} onClick={handleClick} />,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
