import { STORAGE_KEYS } from '../../const/storage_keys.constants';

import types, { AppActionTypes } from '../actionTypes';

export type UserReducerState = {
  loggedIn: boolean;
  newPasswordSanded: boolean;
};

const auth = JSON.parse(localStorage.getItem(STORAGE_KEYS.AUTH) || '{}');

const INITIAL_STATE: UserReducerState = {
  loggedIn: !!auth.accessToken,
  newPasswordSanded: false,
};

const usersReducers = (state = INITIAL_STATE, action: AppActionTypes): UserReducerState => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loggedIn: true,
      };

    case types.LOGIN_FAILURE:
      return {
        ...state,
        loggedIn: false,
      };
    case types.REGISTRATION_REQUEST:
      return {
        ...state,
      };
    case types.REGISTRATION_SUCCESS:
      return {
        ...state,
      };
    case types.REGISTRATION_FAILURE:
      return {
        ...state,
      };
    case types.FORGOT_PASSWORD_REQUEST:
      return {
        ...state,
      };
    case types.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        newPasswordSanded: true,
      };
    case types.FORGOT_PASSWORD_FAILURE:
      return {
        ...state,
      };
    case types.LOGOUT_REQUEST:
      return {
        ...state,
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loggedIn: false,
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default usersReducers;
