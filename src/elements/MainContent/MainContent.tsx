import React from 'react';

import { MainContentBlock } from './MainContent.Styles';

interface Props {
  className?: string;
  children: any;
}

export const MainContent: React.FC<Props> = ({ className, children }) => {
  return (
    <MainContentBlock className={className}>
      {children}
    </MainContentBlock>
  );
};
