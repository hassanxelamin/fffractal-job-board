import React from 'react';
import { ButtonGradient, LogoGrouped } from '@features/ui';

export const NavBar = () => {
  return (
    <div>
      <LogoGrouped />
      <ButtonGradient text="Post a Job!" />
    </div>
  );
};
