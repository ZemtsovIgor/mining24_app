import React, { useRef } from 'react';

import { ModalStyles } from './Modal.Styles';

interface Props {
  opened?: boolean;
  closeModal?: () => void;
  className?: string;
  children?: any;
}

export const Modal: React.FC<Props> = (props: Props) => {
  const { opened, closeModal, className, children } = props;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeClick = (e: any) => {
    e.stopPropagation();
    if (!closeModal) return false;
    if (e.target === modalRef.current) return closeModal();
  };

  if (!opened) {
    return null;
  }

  return (
    <ModalStyles
      ref={modalRef}
      className={className}
      onClick={closeClick}
    >
      <div className={`modal__dialog ${opened ? 'active' : ''}`}>
        {children}
      </div>
    </ModalStyles>
  );
};
