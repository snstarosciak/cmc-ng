import { createSelector, createFeatureSelector } from '@ngrx/store';
import * as fromCoins from '../reducers';

export interface CoinsState {
  entities: [];
  loading: boolean;
}

export interface AppState {
  coins: CoinsState;
}

export const selectCoins = createFeatureSelector<AppState, CoinsState>('coins');

export const selectListPageLoading = createSelector(
  selectCoins,
  (state: CoinsState) => state.loading
);

export const selectCoinEntities = createSelector(
  selectCoins,
  (state: CoinsState) => state.entities
);
