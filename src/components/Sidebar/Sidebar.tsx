import React from 'react';
import { connect } from 'react-redux';

import {
  SidebarWrapper,
} from './Sidebar.Styles';

const Sidebar: React.FC = () => {
  return (
    <SidebarWrapper />
  );
};

export default connect()(Sidebar);
