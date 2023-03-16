import React from 'react';

import { TitleBlock } from './Title.Styles';

interface Props {
  className?: string;
  as?: any;
  children?: any;
}

export const Title: React.FC<Props> = ({ className, as, children }) => {
  return (
    <TitleBlock className={className} as={as}>
      {children}
    </TitleBlock>
  );
};
