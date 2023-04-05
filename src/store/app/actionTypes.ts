const LOADING_START = 'app/LOADING_START';
const LOADING_END = 'app/LOADING_END';
const OPEN_MODAL = 'app/OPEN_MODAL';
const CLOSE_MODAL = 'app/CLOSE_MODAL';

type LoadingStartType = {
  type: typeof LOADING_START;
  payload: null;
};
type LoadingEndType = {
  type: typeof LOADING_END;
  payload: null;
};
type OpenModalType = {
  type: typeof OPEN_MODAL;
  payload?: any;
};
type CloseModalType = {
  type: typeof CLOSE_MODAL;
  payload?: null;
};

export type LoadingActionTypes =
  | LoadingStartType
  | LoadingEndType
  | OpenModalType
  | CloseModalType;

export default {
  LOADING_START,
  LOADING_END,
  OPEN_MODAL,
  CLOSE_MODAL,
} as const;
