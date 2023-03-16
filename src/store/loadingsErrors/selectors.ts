import { AppStateType } from '../index';

export const selectLoadingByKey = (state: AppStateType, key: string): boolean =>
  !!state.loadings.loading[key];

export const selectErrorByKey = (state: AppStateType, key: string): null | string =>
  state.loadings.error[key] ? state.loadings.error[key] : null;
