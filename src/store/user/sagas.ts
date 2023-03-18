import { all, put, takeLatest } from 'redux-saga/effects';

import { setLoading, setError } from '../loadingsErrors/actions';
// import { STORAGE_KEYS } from '../../const/storage_keys.constants';
import types from '../actionTypes';
import {ERRORS} from "../../const/errors.constants";
import {STORAGE_KEYS} from "../../const/storage_keys.constants";

function* login() {

  yield put(setError(types.LOGIN_REQUEST, ERRORS.INCORRECT_EMAIL_OR_PASSWORD));
  // yield put(setLoading(types.LOGIN_REQUEST, true));
  // try {
  //   localStorage.removeItem(STORAGE_KEYS.AUTH);
  //   yield all([put({ type: types.LOGIN_SUCCESS }), put(setLoading(types.LOGIN_SUCCESS, false))]);
  // } catch (e) {
  //   yield all([
  //     put(setLoading(types.LOGOUT_REQUEST, false)),
  //     put({
  //       type: types.LOGIN_FAILURE,
  //       payload: ERRORS.INCORRECT_EMAIL_OR_PASSWORD,
  //     }),
  //   ]);
  // }
}

function* registration() {
  yield all([
    put({ type: types.REGISTRATION_SUCCESS, payload: true }),
    put(setLoading(types.REGISTRATION_REQUEST, false)),
  ]);
}

function* forgotPassword() {
  const auth = {
    accessToken: '123',
    refreshToken: '321',
  };

  localStorage.setItem(STORAGE_KEYS.AUTH, JSON.stringify(auth));
  yield all([
    put({ type: types.FORGOT_PASSWORD_SUCCESS, payload: true }),
    put(setLoading(types.FORGOT_PASSWORD_REQUEST, false)),
    put({ type: types.LOGIN_SUCCESS })
  ]);
}

function* logout() {
  yield all([put({ type: types.LOGOUT_SUCCESS }), put(setLoading(types.LOGOUT_REQUEST, false))]);
}

export default function* usersSagas() {
  yield takeLatest(types.LOGIN_REQUEST, login);
  yield takeLatest(types.REGISTRATION_REQUEST, registration);
  yield takeLatest(types.FORGOT_PASSWORD_REQUEST, forgotPassword);
  yield takeLatest(types.LOGOUT_REQUEST, logout);
}
