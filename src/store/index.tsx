import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';

import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(sagaMiddleware, thunk));

sagaMiddleware.run(rootSaga);

export type AppStoreType = typeof store;
export type AppStateType = ReturnType<typeof store.getState>;

export default store;
