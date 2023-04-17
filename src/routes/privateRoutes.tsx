import React from 'react';
import { useTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { Layout } from '../components/Layout';
import { AppStateType } from '../store';
import { PATHS } from "../const/paths.constants";

interface PrivateRoutesProps {
  children: React.ReactElement;
  title?: string;
  loggedIn: boolean;
}

const PrivateRoutes: React.FC<PrivateRoutesProps> = (props: PrivateRoutesProps) => {
  const {
    children,
    title,
    loggedIn,
  } = props;

  const { t } = useTranslation();
  document.title = `${t(title || '')}`;

  return loggedIn ? (
    <Layout>
      { children }
    </Layout>
  ) : (
    <Navigate replace to={PATHS.LOGIN} />
  );
};

const mapStateToProps = (state: AppStateType) => {
  const { user } = state;
  return {
    loggedIn: user.loggedIn,
  };
};

export default connect(mapStateToProps)(PrivateRoutes);
