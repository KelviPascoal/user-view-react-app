import styled, { css } from 'styled-components';
import {
  space,
  layout,
  color,
  border,
  flexbox,
  grid,
  position,
  shadow,
  typography,
  background,
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  FlexboxProps,
  GridProps,
  PositionProps,
  ShadowProps,
  TypographyProps,
  BackgroundProps,
  compose,
} from 'styled-system';

type BoxProps = SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  FlexboxProps &
  GridProps &
  PositionProps &
  ShadowProps &
  TypographyProps &
  BackgroundProps &
  React.HTMLAttributes<HTMLDivElement> & {
    gap?: number | string;
    columnGap?: number | string;
    rowGap?: number | string;
  } & React.HTMLAttributes<HTMLDivElement>;

export const Box = styled.div<BoxProps>`
${({ gap, columnGap, rowGap, display }) => css`
  display: ${display};
  gap: ${gap || 0};
  column-gap: ${columnGap || gap || 0};
  row-gap: ${rowGap || gap || 0};
`}

  box-sizing: border-box;
  padding: 8px;
  border-radius: 4px;

  ${compose(
  space,
  layout,
  color,
  border,
  flexbox,
  grid,
  position,
  shadow,
  typography,
  background
)}


`;