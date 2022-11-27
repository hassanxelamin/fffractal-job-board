import React from 'react';
import styled from 'styled-components';
import TypeIt from 'typeit-react';
// import Link from 'next/link';
import { Gradient, GradientTextWrap } from '@utils/css-mixins';

export function TitleSection() {
  return (
    <Container>
      <Title>3D Placeholder</Title>
      <Form>
        <CopyTitle>
          <TopTitle>Join startups with the best &nbsp;</TopTitle>
          <TypeTitle
            options={{ speed: 150, loop: true }}
            getBeforeInit={(instance: any) => {
              instance
                .type('Creative Technologist', { delay: 2000 })
                .delete(null, { delay: 1000 });
              instance
                .type('AR Developers', { delay: 2000 })
                .delete(null, { delay: 1000 });
              return instance;
            }}
          />
        </CopyTitle>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  overflow: hidden;
  height: 603px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  width: 692px;
  line-height: 6.4rem;
  font-size: 5.5rem;
  font-weight: 900;
  margin-right: 12.9rem;
  color: white;
`;

const CopyTitle = styled.div`
  text-align: center;
  color: black;
  font-size: 5.4rem;
  font-weight: 700;
  width: 66.3rem;
  height: 13.1rem;
  line-height: 7rem;
  margin-bottom: 2.6rem;
`;

const TopTitle = styled.span`
  color: black;
`;

const TypeTitle = styled(TypeIt)`
  ${Gradient};
  ${GradientTextWrap}
`;
