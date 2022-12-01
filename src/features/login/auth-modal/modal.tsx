import React from 'react';
import { AuthModal } from '.';

interface Props {
  visible: boolean;
  toggleModal: () => void;
}

export const Modal = ({ visible, toggleModal }: Props) => {
  if (visible) return null;

  return <AuthModal toggleModal={toggleModal} />;
};
