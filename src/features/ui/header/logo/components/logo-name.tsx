import React from 'react';
import Link from 'next/link';

/*
 * Styles
 */
import styled from 'styled-components';
import {
  device,
  LogoFont,
  Gradient,
  GradientTextWrap,
} from '@utils/css-mixins';

export function LogoName({ name }) {
  return (
    <Link href="/" passHref data-testid="name-link">
      <Name>{name}</Name>
    </Link>
  );
}

const Name = styled.h1`
  ${LogoFont}
  ${Gradient};
  ${GradientTextWrap};
  @media ${device.tablet} {
    display: none;
  }
`;
