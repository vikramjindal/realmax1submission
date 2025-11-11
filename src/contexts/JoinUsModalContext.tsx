import React, { createContext, useContext, useState, ReactNode } from 'react';

interface JoinUsModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const JoinUsModalContext = createContext<JoinUsModalContextType | undefined>(undefined);

export const JoinUsModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <JoinUsModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </JoinUsModalContext.Provider>
  );
};

export const useJoinUsModal = () => {
  const context = useContext(JoinUsModalContext);
  if (context === undefined) {
    throw new Error('useJoinUsModal must be used within a JoinUsModalProvider');
  }
  return context;
};

