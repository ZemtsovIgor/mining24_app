import CssBaseline from '@mui/material/CssBaseline';
import { StylesProvider } from '@mui/styles';
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

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
import Shop from './pages/Shop/Shop';
import Statistics from "./pages/Statistics/Statistics";
import Transactions from "./pages/Transactions/Transactions";
import Referrals from "./pages/Referrals/Referrals";
import Settings from "./pages/Settings";
import Profile from "./pages/Profile";

function App() {
  return (
    <StylesProvider injectFirst>
      <GlobalStyle />
      <CssBaseline />
      <Routes>
        <Route
          path="*"
          element={<Navigate to={PATHS.DASHBOARD} replace />}
        />
        <Route
          path={PATHS.DASHBOARD}
          element={
            <PrivateRoutes title="navBar.dashboard">
              <Home />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.CONTRACT}
          element={
            <PrivateRoutes title="navBar.contract">
              <Contract />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.CONTRACT_ITEM}
          element={
            <PrivateRoutes title="navBar.contract">
              <ContractItem />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.SHOP}
          element={
            <PrivateRoutes title="navBar.shop">
              <Shop />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.STATISTICS}
          element={
            <PrivateRoutes title="navBar.statistics">
              <Statistics />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.TRANSACTIONS}
          element={
            <PrivateRoutes title="navBar.transactions">
              <Transactions />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.REFERRALS}
          element={
            <PrivateRoutes title="navBar.referrals">
              <Referrals />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.SETTINGS}
          element={
            <PrivateRoutes title="navBar.settings">
              <Settings />
            </PrivateRoutes>
          }
        />
        <Route
          path={PATHS.PROFILE}
          element={
            <PrivateRoutes title="navBar.profile">
              <Profile />
            </PrivateRoutes>
          }
        />

        <Route
          path={PATHS.LOGIN}
          element={
            <GuestRoutes title="login.page.title">
              <Login />
            </GuestRoutes>
          }
        />

        <Route
          path={PATHS.REGISTRATION}
          element={
            <GuestRoutes title="registration.page.title">
              <Registration />
            </GuestRoutes>
          }
        />

        <Route
          path={PATHS.FORGOT_PASSWORD}
          element={
            <GuestRoutes title="forgotPassword.page.title">
              <ForgotPassword />
            </GuestRoutes>
          }
        />
      </Routes>
    </StylesProvider>
  );
}

export default App;
