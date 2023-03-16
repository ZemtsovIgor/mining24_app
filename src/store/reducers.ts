import { combineReducers } from 'redux';

import appReducer from './app/reducers';
import loadingErrorsReducer from './loadingsErrors/reducer';
import usersReducers from './user/reducers';

const reducer = combineReducers({
  app: appReducer,
  loadings: loadingErrorsReducer,
  user: usersReducers,
});

export default reducer;
