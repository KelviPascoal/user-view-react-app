import { JSX } from 'react';
import styled from 'styled-components';

interface FlexProps {
    direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
    align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
    justify?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: string;
    flex?: string;
    as?: keyof JSX.IntrinsicElements;
}

export const Flex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'flex-start'};
  flex-wrap: ${({ wrap }) => wrap || 'nowrap'};
  gap: ${({ gap }) => gap || '0'};
  flex: ${({ flex }) => flex || 'initial'};
`;