import { Action, createReducer, on } from '@ngrx/store';
import * as ListPageActions from '../actions/list-page.actions';

export interface State {
  entities: [];
  loading: boolean
}

export const initialState: State = {
  entities: [],
  loading: true
};

const listPageReducer = createReducer(
  initialState,
  on(ListPageActions.loadCoinsList, state => ({
    ...state,
    entities: [],
    loading: true
  })),
  on(ListPageActions.loadCoinsListSuccess, (state, action) => ({
     ...state,
     entities: action.payload,
     loading: false
    }))
);

export function reducer(state: State | undefined, action: Action) {
  return listPageReducer(state, action);
}