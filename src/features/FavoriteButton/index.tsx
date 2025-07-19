import React from 'react';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';

interface FavoriteButtonProps {
    isFavorite?: boolean;
    onClick: () => void;
}

export const FavoriteButton = ({
    isFavorite,
    onClick,
}: FavoriteButtonProps) => {
    const [hovering, setHovering] = React.useState(false);
    const { t } = useTranslation();

    const label = !isFavorite
        ? t('ADD_TO_FAVORITE')
        : hovering
            ? t('REMOVE_FROM_FAVORITE')
            : t('FAVORITE');

    return (
        <Button
            variant={isFavorite ? 'highlight' : 'secondary'}
            onClick={onClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {label}
        </Button>
    );
};
