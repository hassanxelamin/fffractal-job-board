/* eslint-disable react/button-has-type */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import uuid from 'react-uuid';
import gsap from 'gsap';
import ItemsLoggedOut from './items';

export function Dropdown() {
  const [menuOpen, setIsMenuOpen] = useState(false);

  // const DropbownButton = useRef<HTMLButtonElement>(null);
  const DropbownMenu = useRef<HTMLDivElement>(null);
  const MenuTimeline = useRef<gsap.core.Timeline>();

  useEffect(() => {
    MenuTimeline.current = gsap
      .timeline({
        defaults: {
          duration: 0.1,
          ease: 'power2.out',
        },
      })
      .from('.dropdown-menu', { visibility: 'hidden' })
      .to('.dropdown-menu', { visibility: 'visible' });
  }, []);

  useEffect(() => {
    MenuTimeline.current?.reversed(!menuOpen);
  }, [menuOpen]);

  return (
    <Container>
      <DropdownButton onClick={() => setIsMenuOpen(!menuOpen)}>
        <ButtonContainer>
          <Header>For Employers</Header>
          <Image src="/dropdown.svg" alt="dropdown" width="9" height="7" />
        </ButtonContainer>
      </DropdownButton>

      <DropdownMenu className="dropdown-menu" ref={DropbownMenu}>
        <ul>
          {ItemsLoggedOut.map((item) => (
            <ListItem key={uuid()}>
              <LinkItem href={item.link} passHref>
                <Text>{item.name}</Text>
              </LinkItem>
            </ListItem>
          ))}
        </ul>
      </DropdownMenu>
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
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 30px;
  width: 123px;
  border-radius: 10px;
  box-shadow: 0px 24px 48px 0 rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  visibility: hidden;
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
