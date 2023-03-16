import types from '../actionTypes';

const login = (payload: any) => ({
  type: types.LOGIN_REQUEST,
  payload,
});

const registration = (payload: any) => ({
  type: types.REGISTRATION_REQUEST,
  payload,
});

const forgotPassword = (payload: any) => ({
  type: types.FORGOT_PASSWORD_REQUEST,
  payload,
});

const logout = () => ({
  type: types.LOGOUT_REQUEST,
});

export {
  login,
  registration,
  forgotPassword,
  logout,
};
