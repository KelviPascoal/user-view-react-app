import styled, { css } from 'styled-components';
import {
    space,
    color,
    typography,
    layout,
    SpaceProps,
    ColorProps,
    TypographyProps,
    LayoutProps,
    compose,
} from 'styled-system';
import React from 'react';

type HeadingProps = SpaceProps &
    ColorProps &
    TypographyProps &
    LayoutProps & {
        as?: React.ElementType;
        children: React.ReactNode;
    };

export const Heading = styled.h1<HeadingProps>`
${({ theme }) => css`
  margin: 0;
  font-size: ${theme.font.sizes.large};
  font-family: ${theme.fonts.main};
  font-weight: ${theme.font.bold};
  line-height: 1.2;

  ${compose(space, color, typography, layout)};
`}
`;

Heading.defaultProps = {
    as: 'h3',
};
