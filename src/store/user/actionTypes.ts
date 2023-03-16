import {
  LogInParams,
  RegistrationParams,
} from '../../api';

const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILURE = 'LOGIN_FAILURE';
const REGISTRATION_REQUEST = 'REGISTRATION_REQUEST';
const REGISTRATION_SUCCESS = 'REGISTRATION_SUCCESS';
const REGISTRATION_FAILURE = 'REGISTRATION_FAILURE';
const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
const FORGOT_PASSWORD_FAILURE = 'FORGOT_PASSWORD_FAILURE';
const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

type LoginActionType = {
  type: typeof LOGIN_SUCCESS | typeof LOGIN_FAILURE;
  payload?: any;
};

export type LoginRequest = {
  type: typeof LOGIN_REQUEST;
  payload?: LogInParams;
};

type RegistrationActionType = {
  type: typeof REGISTRATION_SUCCESS | typeof REGISTRATION_FAILURE;
  payload?: any;
};

export type RegistrationRequest = {
  type: typeof REGISTRATION_REQUEST;
  payload?: RegistrationParams;
};

type ForgotPasswordActionType = {
  type: typeof FORGOT_PASSWORD_SUCCESS | typeof FORGOT_PASSWORD_FAILURE;
  payload?: any;
};

export type ForgotPasswordRequest = {
  type: typeof FORGOT_PASSWORD_REQUEST;
  payload?: any;
};

type LogoutActionType = {
  type: typeof LOGOUT_SUCCESS | typeof LOGOUT_FAILURE;
};

export type LogoutRequest = {
  type: typeof LOGOUT_REQUEST;
};

// refactored for shorter version
export type LoginActionTypes = LoginActionType | LoginRequest;
export type RegistrationActionTypes = RegistrationActionType | RegistrationRequest;
export type ForgotPasswordActionTypes = ForgotPasswordActionType | ForgotPasswordRequest;
export type LogoutActionTypes = LogoutActionType | LogoutRequest;

export type UserActionTypes =
  | LoginActionTypes
  | RegistrationActionTypes
  | ForgotPasswordActionTypes
  | LogoutActionTypes;

export default {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTRATION_REQUEST,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILURE,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} as const;
