/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  text: string;
};

export function ButtonGradient({ text }: ButtonProps) {
  return (
    <Link href="/job-post" passHref legacyBehavior data-testid="custom-element">
      <a className="flex items-center justify-center text-center h-[42px] rounded-[50px] text-black font-bold text-[1.2rem] border-none w-[123px]">
        {text}
      </a>
    </Link>
  );
}
