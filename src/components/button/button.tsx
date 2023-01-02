/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

type ButtonProps = {
  text: string;
};

export function Button({ text }: ButtonProps) {
  return (
    <Link href="/job-post" passHref legacyBehavior data-testid="custom-element">
      <a className="flex items-center justify-center text-center h-[30px] sm:h-[42px] rounded-[50px] bg-black text-white font-bold text-[1.2rem] border-none w-[90px] sm:w-[123px]">
        {text}
      </a>
    </Link>
  );
}
