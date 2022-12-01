/* eslint-disable no-console */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useSession, signOut } from 'next-auth/react';
import { ButtonStyle } from '@utils/css-mixins';

/*
 * Styles
 */
import styled from 'styled-components';

/*
 * Utils
 */
import uuid from 'react-uuid';
import { ItemsLoggedOut, ItemsLoggedIn } from './items';

export function Dropdown({ toggleModal }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();
  const user = session?.user;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <DropdownButton
        onClick={() => {
          toggleMenu();
        }}
      >
        <ButtonContainer>
          {!user ? (
            <Header>For Employers</Header>
          ) : (
            <Header>My Account</Header>
          )}
          <Image src="/dropdown.svg" alt="dropdown" width="9" height="7" />
        </ButtonContainer>
      </DropdownButton>

      {isMenuOpen ? (
        <DropdownMenu className="dropdown-menu">
          {!user ? (
            <ul>
              {ItemsLoggedOut.map((item) => (
                <ListItem key={uuid()}>
                  {item.name === 'Sign in' ? (
                    <Item
                      onClick={() => {
                        toggleMenu();
                        toggleModal();
                      }}
                    >
                      <Text>{item.name}</Text>
                    </Item>
                  ) : (
                    <LinkItem href={item.link} passHref>
                      <Text>{item.name}</Text>
                    </LinkItem>
                  )}
                </ListItem>
              ))}
            </ul>
          ) : (
            <ul>
              {ItemsLoggedIn.map((item) => (
                <ListItem key={uuid()}>
                  {item.name === 'Sign Out' ? (
                    <Item
                      onClick={() => {
                        toggleMenu();
                        signOut();
                      }}
                    >
                      <Text>{item.name}</Text>
                    </Item>
                  ) : (
                    <LinkItem href={item.link} passHref>
                      <Text>{item.name}</Text>
                    </LinkItem>
                  )}
                </ListItem>
              ))}
            </ul>
          )}
        </DropdownMenu>
      ) : null}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-right: 3.2rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  ${ButtonStyle};
  width: 123px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
  width: 123px;
  border-radius: 10px;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DropdownButton = styled.button`
  &:hover .dropdown-menu {
    transition-duration: 0.1s;
    opacity: 1;
  }
`;

const LinkItem = styled(Link)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 7px;
  margin-top: 7px;

  width: 110px;
  height: 30px;
  border-radius: 10px;

  &:hover {
    background-color: #f5f5f5;
  }
`;

const Text = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 12px;
`;

const Header = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  margin-right: 0.5rem;
`;
