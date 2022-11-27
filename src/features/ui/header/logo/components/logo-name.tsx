import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import {
  device,
  LogoFont,
  Gradient,
  GradientTextWrap,
} from '@utils/css-mixins';

export function LogoName() {
  return (
    <Link href="/" passHref data-testid="name-link">
      <Name>FFFRACTAL</Name>
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
