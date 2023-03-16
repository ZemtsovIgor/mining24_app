import { put, takeLatest } from 'redux-saga/effects';

import types from '../actionTypes';

function* loading() {
  yield put({
    type: types.LOADING_START,
  });
}

export default function* appSagas() {
  yield takeLatest(types.LOADING_START, loading);
}
