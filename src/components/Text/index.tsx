import styled from 'styled-components';
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

type TextProps = SpaceProps &
    ColorProps &
    TypographyProps &
    LayoutProps & {
        as?: React.ElementType;
        children: React.ReactNode;
    };

export const Text = styled.p<TextProps>`
  margin: 0;
  font-family: ${({ theme }) => theme.font.family};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  line-height: 1.5;

  ${compose(space, color, typography, layout)};
`;

Text.defaultProps = {
    as: 'p',
};
