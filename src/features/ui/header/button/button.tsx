import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { ButtonStyle, Gradient } from '@utils/css-mixins';

type ButtonProps = {
  text: string;
};

export function ButtonGradient({ text }: ButtonProps) {
  return (
    <Link href="/job-post" passHref legacyBehavior data-testid="custom-element">
      <Button>{text}</Button>
    </Link>
  );
}

const Button = styled.a`
  ${ButtonStyle};
  ${Gradient};
  color: white;
  border: none;
  width: 123px;
`;
