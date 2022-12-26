import React from 'react';
import Link from 'next/link';

/*
 * Styles
 */
import styled from 'styled-components';
// import { ButtonStyle, Gradient } from 'src/helpers/css-mixins';

/*
 * Types
 */
type ButtonProps = {
  text: string;
};

export function ButtonGradient({ text }: ButtonProps) {
  return (
    <Link href="/job-post" passHref legacyBehavior data-testid="custom-element">
      <a className="flex items-center justify-center text-center h-[42px] rounded-[50px] text-black font-bold text-[1.2rem] border-none w-[123px]">{text}</a>
    </Link>
  );
}

// animate-gradient linearbg-gradient1 linearbg-gradient2 bg-clip-text