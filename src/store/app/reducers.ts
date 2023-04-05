import types, { AppActionTypes } from '../actionTypes';

export type AppReducerState = {
  loading: boolean;
  modal: any;
};

const INITIAL_STATE: AppReducerState = {
  loading: true,
  modal: null,
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
    case types.OPEN_MODAL:
      const newModal = action.payload;
      newModal.opened = true;

      return {
        ...state,
        modal: newModal,
      };
    case types.CLOSE_MODAL:
      return {
        ...state,
        modal: null,
      };
    default:
      return state;
  }
};

export default appReducers;
