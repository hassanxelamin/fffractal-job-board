import React, { useState } from 'react';

import { Modal, Logo, Dropdown, Button } from '..';

export const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  return (
    <div className="font-satoshi h-[120px] flex items-center justify-between mr-[20px] ml-[20px] sm:mr-[30px] sm:ml-[30px]">
      <Logo />
      <div className="flex items-center justify-center">
        <Dropdown toggleModal={toggleModal} />
        <Button text="Post a Job!" />
      </div>
      <Modal toggleModal={toggleModal} visible={isModalOpen} />
    </div>
  );
};
