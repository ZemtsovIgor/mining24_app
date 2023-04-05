import React from 'react';
import { connect } from 'react-redux';

import Header from '../../Header';
import { Content, MainContainer, SiteWrapper } from './Layout.Styles';
import Sidebar from '../../Sidebar/Sidebar';
import MobileMenu from '../../MobileMenu/MobileMenu';
import { Alert, Modal } from '../../../elements';
import { AppStateType } from '../../../store';
import { setAlert } from '../../../store/loadingsErrors/actions';

interface Props {
  alert?: any;
  modal: any;
  children?: any;
  setAlert: (message: string | null, messageType: string | null) => void;
}

const Layout: React.FC<Props> = (props: Props) => {
  const {
    alert,
    modal,
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
      <Modal
        opened={modal?.opened}
        closeModal={() => modal?.closeModal()}
        className={modal?.className}
        hasCloseBtn={modal?.hasCloseBtn}
        children={modal?.content()}
      />
    </SiteWrapper>
  );
};

const mapState = (state: AppStateType) => {
  const { app, loadings } = state;
  return {
    alert: loadings.alert,
    modal: app.modal
  };
};

export default connect(mapState, { setAlert })(Layout);
