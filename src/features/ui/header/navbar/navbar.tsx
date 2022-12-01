/* eslint-disable no-console */
import React, { useState } from 'react';

/*
 * Styles
 */
import styled from 'styled-components';
import { device } from '@utils/css-mixins';

/*
 * Components
 */
import { AuthModal } from '@features/login';
import { LogoGrouped, Dropdown, ButtonGradient } from '@features/ui';

export const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <Container>
      <LogoGrouped />
      <Menus>
        <Dropdown toggleModal={toggleModal} />
        <ButtonGradient text="Post a Job!" />
      </Menus>
      <AuthModal toggleModal={toggleModal} visible={isModalOpen} />
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
