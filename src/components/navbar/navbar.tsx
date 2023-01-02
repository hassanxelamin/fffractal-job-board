import React, { useState } from 'react';

import { Modal, Logo, Dropdown, Button } from '..';

export const NavBar = () => {
  const [isModalOpen, setModalOpen] = useState(true);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

  const setModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="font-satoshi h-[120px] flex items-center justify-between mr-[20px] ml-[20px] sm:mr-[30px] sm:ml-[30px]">
      <Logo />
      <div className="flex items-center justify-between">
        <div
          className="text-[1.2rem] font-bold ml-[12px] w-[70px] sm:hidden cursor-pointer"
          onClick={() => {
            toggleModal();
          }}
        >
          Sign in
        </div>
        <div className="hidden sm:flex">
          <Dropdown toggleModal={toggleModal} />
        </div>
        <Button text="Post a Job!" />
      </div>
      <Modal
        toggleModal={toggleModal}
        setModal={setModal}
        visible={isModalOpen}
      />
    </div>
  );
};
