import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../../../../components/Button';

interface FavoriteButtonProps {
    isFavorite?: boolean;
    onClick: () => void;
}

export const FavoriteButton = ({
    isFavorite,
    onClick,
}: FavoriteButtonProps) => {
    const [hovering, setHovering] = useState(false);

    const label = !isFavorite
        ? 'Favoritar'
        : hovering
            ? 'Remover dos favoritos'
            : 'Favorito';

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
