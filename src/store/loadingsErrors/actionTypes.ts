import types from '../actionTypes';

const SET_IS_FETCHING = 'loading/SET_LOADING';
const SET_ERROR = 'loading/SET_ERROR';
const SET_ALERT = 'loading/SET_ALERT';

// interfaces
export interface SetLoading {
  type: typeof types.SET_IS_FETCHING;
  key: string;
  status: boolean;
}
export interface SetError {
  type: typeof types.SET_ERROR;
  key: string;
  message: null | string;
}

export interface SetAlert {
  type: typeof types.SET_ALERT;
  message: string | null;
  messageType: string | null;
}

export type LoadingErrorsTypes = SetLoading | SetError | SetAlert;

export default {
  SET_IS_FETCHING,
  SET_ERROR,
  SET_ALERT,
} as const;
