import React from 'react';
import styled from 'styled-components';
import { device } from '@utils/css-mixins';
import { LogoName } from './logo-name';
import { LogoImage } from './logo-image';

export function LogoGrouped() {
  return (
    <Container>
      <LogoImage />
      <Divider />
      <LogoName />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.div`
  height: 4.9rem;
  border-left: 1px solid black;
  margin-right: 2rem;
  margin-left: 2rem;
  @media ${device.tablet} {
    display: none;
  }
`;
