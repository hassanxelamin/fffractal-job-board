import React from 'react';
import { AuthModal } from './auth-modal';

interface Props {
  visible: boolean;
  toggleModal: () => void;
  setModal: () => void;
}

export const Modal = ({ visible, toggleModal, setModal }: Props) => {
  if (visible) return null;

  return <AuthModal toggleModal={toggleModal} setModal={setModal} />;
};
