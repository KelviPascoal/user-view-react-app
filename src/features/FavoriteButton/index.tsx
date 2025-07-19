import React from 'react';
import { Button } from '../../components/Button';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

interface FavoriteButtonProps {
    isFavorite?: boolean;
    onClick: () => void;
}

const SmoothContent = styled.span<{ visible: boolean }>`
  display: inline-block;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

export const FavoriteButton = ({
    isFavorite,
    onClick,
}: FavoriteButtonProps) => {
    const { t } = useTranslation();
    const [hovering, setHovering] = React.useState(false);
    const [visible, setVisible] = React.useState(true);
    const [label, setLabel] = React.useState(t('ADD_TO_FAVORITE'));

    const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

    const computeLabel = () => {
        if (!isFavorite) return t('ADD_TO_FAVORITE');

        return hovering ? t('REMOVE_FROM_FAVORITE') : t('FAVORITE');
    };

    const newLabel = computeLabel();

    React.useEffect(() => {
        if (newLabel === label) return;

        // Inicia transição
        setVisible(false);

        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        timeoutRef.current = setTimeout(() => {
            setLabel(newLabel);
            setVisible(true);
        }, 200);
    }, [label, newLabel]);

    React.useEffect(() => {
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    return (
        <Button
            variant={isFavorite ? 'highlight' : 'secondary'}
            onClick={onClick}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <SmoothContent visible={visible}>{label}</SmoothContent>
        </Button>
    );
};