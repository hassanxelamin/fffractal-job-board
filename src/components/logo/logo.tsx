import React from 'react';
import Link from 'next/link';
import { LogoSVG } from './logo-svg';

export function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" passHref data-testid="logo-link" className="mr-[11px]">
        <LogoSVG />
      </Link>
      <Link
        href="/"
        passHref
        data-testid="name-link"
        className="hidden sm:block"
      >
        <h1 className="hidden sm:block font-gilmer text-[20px]">FFFRACTAL</h1>
      </Link>
    </div>
  );
}
