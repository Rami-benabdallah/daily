import { useState } from 'react';

export const useModal = () => {
  const [modals, setModals] = useState({});

  const openModal = (modalId) => {
    setModals((prev) => ({ ...prev, [modalId]: true }));
  };

  const closeModal = (modalId) => {
    setModals((prev) => ({ ...prev, [modalId]: false }));
  };

  const isModalOpen = (modalId) => modals[modalId];

  return { isModalOpen, openModal, closeModal };
};
