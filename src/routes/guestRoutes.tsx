import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { AuthLayout } from '../components/Layout';
import { PATHS } from '../const/paths.constants';

interface GuestRoutesProps extends RouteProps {
  component?: any;
  loggedIn: boolean;
  title?: string;
  rest?: any;
}

const GuestRoutes: React.FC<GuestRoutesProps> = ({
  component: Component,
  loggedIn,
  title,
  ...rest
}) => {
  const { t } = useTranslation();

  return (
    <Route
      {...rest}
      render={props => {
        document.title = `${t(title || '')}`;
        return loggedIn ? (
          <Redirect to={PATHS.DASHBOARD} />
        ) : (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        );
      }}
    />
  );
};

const mapStateToProps = (state: any) => ({
  loggedIn: state.user.loggedIn,
});

export default connect(mapStateToProps)(GuestRoutes);
