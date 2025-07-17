import React from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';
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
        <ButtonBase
            isFavorite={isFavorite}
            onClick={onClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            {label}
        </ButtonBase>
    );
};

const ButtonBase = styled(Button) <{ isFavorite?: boolean }>`
  color: #fff;
  background-color: ${({ isFavorite, theme }) =>
        isFavorite ? theme.colors.highlight : theme.colors.primary};

  transition: background-color 0.2s, color 0.2s;
`;
