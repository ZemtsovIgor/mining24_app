import React from 'react';

import { ButtonContainer } from './Button.Styles';

interface Props {
  type?: string;
  disabled?: boolean;
  className?: string;
  children?: any;
  onClick?: () => void;
  primary?: boolean;
  secondary?: boolean;
  as?: any;
  to?: any;
  target?: string;
}

export const Button: React.FC<Props> = ({
  as,
  to,
  type,
  disabled,
  className,
  children,
  onClick,
  primary,
  secondary,
  target,
}) => {
  const handleClick = () => {
    if (!onClick) return false;
    return onClick();
  };
  return (
    <ButtonContainer
      as={as}
      to={to}
      className={`${className} ${primary ? '-primary' : ''} ${secondary ? '-secondary' : ''}`}
      type={type}
      disabled={disabled}
      onClick={handleClick}
      target={target}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
