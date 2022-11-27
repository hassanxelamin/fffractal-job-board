/* eslint-disable react/button-has-type */
import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import uuid from 'react-uuid';
import gsap from 'gsap';
import { useSelector, useDispatch } from 'react-redux';
import ItemsLoggedOut from './items';
import type { RootState } from '../../../../redux/store';
import { setTrue, setFalse } from '../../../../redux/slices/outside-click';

export function Dropdown() {
  const [menuOpen, setIsMenuOpen] = useState(false);
  // const { ref, isComponentVisible } = useComponentVisible(true);
  // const DropbownButton = useRef<HTMLButtonElement>(null);
  // const DropbownMenu = useRef<HTMLDivElement>(null);

  const isComponentVisible = useSelector(
    (state: RootState) => state.closer.value
  );

  const dispatch = useDispatch();

  const ref = useRef<any>(null);

  const handleClickOutside = (ev: { target: any }) => {
    if (ref.current && !ref.current.contains(ev.target)) {
      dispatch(setFalse());
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  // const setVisibility = (initState: boolean) => {
  //   setIsComponentVisible(initState);
  // };

  // -------- GSAP -----------

  const MenuTimeline = useRef<gsap.core.Timeline>();

  useEffect(() => {
    if (isComponentVisible === false && menuOpen === true) {
      MenuTimeline.current = gsap
        .timeline({
          defaults: {
            duration: 0.1,
            ease: 'power2.out',
          },
        })
        .to('.dropdown-menu', { visibility: 'visible' });
      // .to('.dropdown-menu', { visibility: 'visible' });
    } else {
      MenuTimeline.current = gsap
        .timeline({
          defaults: {
            duration: 0.1,
            ease: 'power2.out',
          },
        })
        .from('.dropdown-menu', { visibility: 'hidden' })
        .to('.dropdown-menu', { visibility: 'visible' });
    }
  }, [isComponentVisible, menuOpen]);

  useEffect(() => {
    MenuTimeline.current?.reversed(!menuOpen);
  }, [menuOpen]);

  return (
    <Container>
      <DropdownButton
        onClick={() => {
          setIsMenuOpen(!menuOpen);
          dispatch(setTrue());
        }}
      >
        <ButtonContainer ref={ref}>
          <Header>For Employers</Header>
          <Image src="/dropdown.svg" alt="dropdown" width="9" height="7" />
        </ButtonContainer>
      </DropdownButton>
      {isComponentVisible ? (
        <DropdownMenu className="dropdown-menu">
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
