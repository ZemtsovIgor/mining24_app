import types, { AppActionTypes } from '../actionTypes';

export type LoadingErrorsState = {
  loading: {
    [key: string]: boolean;
  };
  error: {
    [key: string]: string;
  };
  alert: {
    message: string | null;
    messageType: string | null;
  };
};

export const initialState: LoadingErrorsState = {
  loading: {},
  error: {},
  alert: {
    message: null,
    messageType: null,
  },
};

const loadingErrorsReducer = (
  state: LoadingErrorsState = initialState,
  action: AppActionTypes
): LoadingErrorsState => {
  switch (action.type) {
    // setting fetching and frozen status
    case types.SET_IS_FETCHING: {
      if (state.loading[action.key] && !action.status) {
        const newState = { ...state };
        delete newState.loading[action.key];
        return newState;
      }
      if (!state.loading[action.key] && action.status) {
        return {
          ...state,
          loading: { ...state.loading, [action.key]: action.status },
        };
      }
      return state;
    }

    /* ====================
        set error by key
       ==================== */
    case types.SET_ERROR: {
      if (state.error[action.key] && !action.message) {
        const newState = { ...state };
        delete newState.error[action.key];
        return newState;
      }
      if (action.message) {
        return {
          ...state,
          error: { ...state.error, [action.key]: action.message },
        };
      }
      return state;
    }
    case types.SET_ALERT: {
      return {
        ...state,
        alert: {
          message: action.message,
          messageType: action.messageType,
        },
      };
    }
    default:
      return state;
  }
};

export default loadingErrorsReducer;
