import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import { GlobalStyle } from './App.Styles';
import { PATHS } from './const/paths.constants';
import GuestRoutes from './routes/guestRoutes';
import PrivateRoutes from './routes/privateRoutes';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import ForgotPassword from './pages/Auth/ForgotPassword';
import Home from './pages/Home/Home';
import Contract from './pages/Contract/Contract';
import ContractItem from './pages/Contract/ContractItem';

function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <CssBaseline />
      <Router>
        <Route exact path="/" render={() => <Redirect to={PATHS.DASHBOARD} />} />
        <PrivateRoutes exact path={PATHS.DASHBOARD} component={Home} title="navBar.dashboard" />
        <PrivateRoutes exact path={PATHS.CONTRACT} component={Contract} title="navBar.contract" />
        <PrivateRoutes exact path={PATHS.CONTRACT_ITEM} component={ContractItem} title="navBar.contract" />

        <GuestRoutes
          exact
          path={PATHS.LOGIN}
          component={Login}
          title="login.page.titles.title"
        />
        <GuestRoutes
          exact
          path={PATHS.REGISTRATION}
          component={Registration}
          title="registration.page.title"
        />
        <GuestRoutes
          exact
          path={PATHS.FORGOT_PASSWORD}
          component={ForgotPassword}
          title="forgotPassword.page.title"
        />
      </Router>
    </StylesProvider>
  );
}

export default App;
