import React from 'react';
import { connect } from 'react-redux';

import Header from '../../Header';
import { Content, MainContainer, SiteWrapper } from './Layout.Styles';
import Sidebar from '../../Sidebar/Sidebar';
import MobileMenu from '../../MobileMenu/MobileMenu';
import { Alert } from '../../../elements';
import { AppStateType } from '../../../store';
import { setAlert } from '../../../store/loadingsErrors/actions';

interface Props {
  alert?: any;
  children?: any;
  setAlert: (message: string | null, messageType: string | null) => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    alert,
    children,
    setAlert,
  } = props;

  return (
    <SiteWrapper>
      <MainContainer className='main-container'>
        <Sidebar />
        <Content className="content">
          <Header />
          {children}
        </Content>
      </MainContainer>
      <MobileMenu />

      <Alert alert={alert} pathname={children?.props?.location?.pathname} setAlert={setAlert} />
    </SiteWrapper>
  );
};

const mapState = (state: AppStateType) => {
  const { loadings } = state;
  return {
    alert: loadings.alert
  };
};

export default connect(mapState, { setAlert })(Layout);
