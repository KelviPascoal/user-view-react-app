import { screen, fireEvent } from '@testing-library/react';
import { FavoriteButton } from './';
import { render } from '../../../../utils/test-utils';

jest.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => {
            const translations: Record<string, string> = {
                ADD_TO_FAVORITE: 'Add to Favorite',
                REMOVE_FROM_FAVORITE: 'Remove from Favorite',
                FAVORITE: 'Favorite',
            };

            return translations[key] || key;
        },
    }),
}));

describe('FavoriteButton component', () => {
    it('renders "Add to Favorite" when isFavorite is false', () => {
        render(<FavoriteButton isFavorite={false} onClick={() => { }} />);
        expect(screen.getByRole('button')).toHaveTextContent('Add to Favorite');
    });

    it('renders "Favorite" when isFavorite is true and not hovering', () => {
        render(<FavoriteButton isFavorite={true} onClick={() => { }} />);
        expect(screen.getByRole('button')).toHaveTextContent('Favorite');
    });

    it('renders "Remove from Favorite" when isFavorite is true and hovering', () => {
        render(<FavoriteButton isFavorite={true} onClick={() => { }} />);
        const button = screen.getByRole('button');

        fireEvent.mouseEnter(button);
        setTimeout(() => {
            expect(screen.getByText('Remove from Favorites')).toBeInTheDocument();
        }, 500);

        fireEvent.mouseLeave(button);
        expect(button).toHaveTextContent('Favorite');
    });

    it('calls onClick handler when clicked', () => {
        const handleClick = jest.fn();

        render(<FavoriteButton isFavorite={false} onClick={handleClick} />);

        const button = screen.getByRole('button');

        fireEvent.click(button);
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

});
