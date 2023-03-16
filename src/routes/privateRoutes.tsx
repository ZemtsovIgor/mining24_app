import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Route, Redirect, RouteProps } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { AppStateType } from '../store';
import {PATHS} from "../const/paths.constants";

interface PrivateRoutesProps extends RouteProps {
  component: any;
  loggedIn: boolean;
  title?: string;
  rest?: Object;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = (props: PrivateRoutesProps) => {
  const {
    component: Component,
    loggedIn,
    title,
    ...rest
  } = props;

  const { t } = useTranslation();

  return (
    <Route
      {...rest}
      render={props => {
        document.title = `${t(title || '')}`;
        return loggedIn ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={PATHS.LOGIN} />
        );
      }}
    />
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { user } = state;
  return {
    loggedIn: user.loggedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
