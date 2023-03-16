const LOADING_START = 'app/LOADING_START';
const LOADING_END = 'app/LOADING_END';

type LoadingStartType = {
  type: typeof LOADING_START;
  payload: null;
};
type LoadingEndType = {
  type: typeof LOADING_END;
  payload: null;
};

export type LoadingActionTypes =
  | LoadingStartType
  | LoadingEndType;

export default {
  LOADING_START,
  LOADING_END,
} as const;
