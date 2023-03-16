import appActionTypes from '../actionTypes';

import { SetError, SetLoading, SetAlert } from './actionTypes';

// Internal ACTIONS CREATORS
export const setLoading = (key: string, status: boolean): SetLoading => ({
  type: appActionTypes.SET_IS_FETCHING,
  key,
  status,
});

export const setError = (key: string, message: string | null): SetError => ({
  type: appActionTypes.SET_ERROR,
  key,
  message,
});

export const setAlert = (message: string | null, messageType: string | null): SetAlert => ({
  type: appActionTypes.SET_ALERT,
  message,
  messageType,
});
