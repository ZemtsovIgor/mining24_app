import React from 'react';
import { connect } from 'react-redux';

import { SiteWrapper } from '../Dashboard/Layout.Styles';
import { Alert } from '../../../elements';
import { AppStateType } from '../../../store';
import { setAlert } from '../../../store/loadingsErrors/actions';

interface Props {
  alert?: any;
  children?: any;
  setAlert: (message: string | null, messageType: string | null) => void;
}

const AuthLayout: React.FC<Props> = (props: Props) => {
  const { alert, children, setAlert } = props;

  return (
    <SiteWrapper className="auth">
      {children}
      <Alert alert={alert} pathname={children?.props?.location?.pathname} setAlert={setAlert} />
    </SiteWrapper>
  );
};

const mapState = (state: AppStateType) => {
  const { loadings } = state;
  return {
    alert: loadings.alert,
  };
};

export default connect(mapState, { setAlert })(AuthLayout);
