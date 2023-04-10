import { LoadingActionTypes } from './actionTypes';

import types from '../actionTypes';

// Type returns type of action
const loading = (start = true): LoadingActionTypes => ({
  type: start ? types.LOADING_START : types.LOADING_END,
  payload: null,
});

const openModal = (payload: any) => ({
  type: types.OPEN_MODAL,
  payload,
});

const closeModal = () => ({
  type: types.CLOSE_MODAL,
});

const setMobileMenuOpen = (payload: boolean) => ({
  type: types.SET_MOBILE_MENU_OPEN,
  payload,
});

export {
  loading,
  openModal,
  closeModal,
  setMobileMenuOpen
};
