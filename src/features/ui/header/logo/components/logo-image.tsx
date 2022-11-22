import React from 'react';
import Link from 'next/link';
import { LogoSVG } from './logo-svg';

export function LogoImage() {
  return (
    <Link href="/" passHref data-testid="logo-link">
      <LogoSVG />
    </Link>
  );
}
