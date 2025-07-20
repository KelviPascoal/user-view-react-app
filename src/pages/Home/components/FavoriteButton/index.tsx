import React, { useRef, useSyncExternalStore } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '../../../../components';

interface FavoriteButtonProps {
    isFavorite?: boolean;
    onClick: () => void;
}

export const FavoriteButton = ({
    isFavorite,
    onClick,
}: FavoriteButtonProps) => {
    const { t } = useTranslation();

    const hoverRef = useRef(false);
    const subscribers = useRef<Set<() => void>>(new Set());

    const subscribe = (callback: () => void) => {
        subscribers.current.add(callback);

        return () => subscribers.current.delete(callback);
    };

    const getSnapshot = () => hoverRef.current;

    const hovering = useSyncExternalStore(subscribe, getSnapshot);

    const setHovering = (value: boolean) => {
        hoverRef.current = value;
        subscribers.current.forEach(cb => cb());
    };

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
