import React from 'react';
import { connect } from 'react-redux';

import { HeaderWrapper } from './Header.styles';

const Header: React.FC = () => {

  return (
    <HeaderWrapper className='header' />
  );
};

export default connect()(Header);
