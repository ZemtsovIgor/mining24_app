import types, { AppActionTypes } from '../actionTypes';

export type AppReducerState = {
  loading: boolean;
};

const INITIAL_STATE: AppReducerState = {
  loading: true,
};

const appReducers = (state = INITIAL_STATE, action: AppActionTypes): AppReducerState => {
  switch (action.type) {
    case types.LOADING_START:
      return {
        ...state,
        loading: true,
      };
    case types.LOADING_END:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default appReducers;
