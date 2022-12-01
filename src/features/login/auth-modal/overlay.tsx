import React from 'react';
import './Overlay.css';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Overlay = ({ children, close }) => {
  const variants = {
    open: { backgroundColor: 'rgba(0,0,0,0.6)' },
    closed: { backgroundColor: 'rgba(0,0,0,0)' },
  };

  return (
    <Container
      className="overlay"
      onClick={close}
      variants={variants}
      initial="closed"
      animate="open"
      exit="closed"
      key="overlay"
    >
      {children}
    </Container>
  );
};

export default Overlay;

const Container = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
  display: flex;

  @media only screen {
    .overlay {
      overflow-y: scroll;
      justify-content: center;
      align-items: flex-start;
      padding: 40px 0px;
    }
  }

  @media screen and (min-width: 1281px) {
    .overlay {
      justify-content: center;
      align-items: center;
    }
  }
`;
