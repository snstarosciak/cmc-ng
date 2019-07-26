import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CoinsService } from '../../shared/services/coins.service';
import * as ListPageActions from '../actions/list-page.actions';

@Injectable()
export class ListPageEffects {

  loadCoinsList$ = createEffect(() => this.actions$.pipe(
    ofType(ListPageActions.loadCoinsList),
    mergeMap(params => this.coinsService.getCoinListingLatest(params.sort, params.sortDir)
      .pipe(
        map((coins: any) => (ListPageActions.loadCoinsListSuccess({payload: coins.response.data}))),
        catchError(() => of(ListPageActions.loadCoinsListFailed()))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private coinsService: CoinsService
  ) {}
}