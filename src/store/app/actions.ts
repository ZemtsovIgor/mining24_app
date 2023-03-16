import { LoadingActionTypes } from './actionTypes';

import types from '../actionTypes';

// Type returns type of action
const loading = (start = true): LoadingActionTypes => ({
  type: start ? types.LOADING_START : types.LOADING_END,
  payload: null,
});

export default {
  loading,
};
