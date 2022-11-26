import React from 'react';
import { ButtonGradient, LogoGrouped, Dropdown } from '@features/ui';
import { device } from '@utils/css-mixins';
import styled from 'styled-components';

export const NavBar = () => {

  return (
    <Container>
      <LogoGrouped />
      <Menus>
        <Dropdown />
        <ButtonGradient text="Post a Job!" />
      </Menus>
    </Container>
  );
};

const Container = styled.div`
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 3rem 0 3rem;

  @media ${device.tablet} {
    margin: 0rem 3rem 0 3rem;
  }

  @media ${device.phone} {
    margin: 0rem 2rem 0 2rem;
  }
`;

const Menus = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
