import { all, fork } from 'redux-saga/effects';

import appSagas from './app/sagas';
import usersSagas from './user/sagas';

export default function* rootSaga() {
  yield all([
    fork(appSagas),
    fork(usersSagas),
  ]);
}
