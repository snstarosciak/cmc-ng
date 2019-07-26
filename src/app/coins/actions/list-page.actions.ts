import { createAction, props } from '@ngrx/store';

export const loadCoinsList = createAction(
  '[Coins List Page] Load Coins List',
  props<{sort: string; sortDir: string}>()
);

export const loadCoinsListSuccess = createAction(
  '[Coins List Page] Load Coins List Success',
  props<{payload}>()
);
export const loadCoinsListFailed = createAction('[Coins List Page] Load Coins List Failed');