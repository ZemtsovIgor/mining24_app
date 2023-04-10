import types, { AppActionTypes } from '../actionTypes';

export type AppReducerState = {
  loading: boolean;
  modal: any;
  mobileMenuOpened: boolean;
};

const INITIAL_STATE: AppReducerState = {
  loading: true,
  modal: null,
  mobileMenuOpened: false,
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
    case types.SET_MOBILE_MENU_OPEN: {
      return {
        ...state,
        mobileMenuOpened: action.payload,
      };
    }
    default:
      return state;
  }
};

export default appReducers;
