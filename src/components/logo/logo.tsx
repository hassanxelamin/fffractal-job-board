import React from 'react';
import Link from 'next/link';
import { LogoSVG } from './logo-svg';

export function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" passHref data-testid="logo-link">
        <LogoSVG />
      </Link>
      <div className="hidden sm:block h-[4.9rem] border-l-[1px] border-solid border-black mr-[2rem] ml-[2rem]" />
      <Link
        href="/"
        passHref
        data-testid="name-link"
        className="hidden sm:block"
      >
        <h1 className="hidden sm:block font-grotesk font-medium text-[4rem] tracking-[-0.2rem]">
          FFFRACTAL
        </h1>
      </Link>
    </div>
  );
}
