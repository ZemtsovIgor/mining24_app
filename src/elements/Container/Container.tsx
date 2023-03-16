import React from 'react';

import { ContainerBlock } from './Container.Styles';

interface Props {
  className?: string;
  children: any;
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return <ContainerBlock className={className}>{children}</ContainerBlock>;
};
