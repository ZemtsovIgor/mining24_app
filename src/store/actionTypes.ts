import appTypes, { LoadingActionTypes } from './app/actionTypes';
import loadingErrorsTypes, { LoadingErrorsTypes } from './loadingsErrors/actionTypes';
import usersTypes, { UserActionTypes } from './user/actionTypes';

const appActionTypes = {
  ...appTypes,
  ...loadingErrorsTypes,
  ...usersTypes,
} as const;

export type AppActionTypes =
  | LoadingActionTypes
  | LoadingErrorsTypes
  | UserActionTypes;

export default appActionTypes;
