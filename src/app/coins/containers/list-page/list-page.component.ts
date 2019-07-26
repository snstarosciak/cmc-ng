import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Coin } from '../../models/coin';
import * as ListPageActions from '../../actions/list-page.actions';
import { CoinsService } from '../../../shared/services/coins.service';
import * as fromCoins from '../../reducers';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'coins-list-page',
    templateUrl: './list-page.component.html',
    styleUrls: ['./list-page.component.scss']
})
export class CoinsListPageComponent implements OnInit {


    public loading: boolean;
    public filterTerm: string;
    public coinData = [];
    public sortOptions: object = {
      name: false,
      market_cap: false,
      price: false,
      volume_24h: false,
      circulating_supply: false,
    }

    constructor(
      private store: Store<any>,
      private coinsService: CoinsService
    ) {

      combineLatest(
        store.pipe(select(fromCoins.selectCoinEntities)),
        store.pipe(select(fromCoins.selectListPageLoading))
      ).subscribe(result => {
        this.coinData = result[0].map(coin => new Coin(coin));
        this.loading = result[1];
      });
    }

    ngOnInit() {
      this.store.dispatch(ListPageActions.loadCoinsList({sort: '', sortDir: ''}));
    }

    public sort(sort) {

      // Store the current state of the sort option
      const sortOption = !this.sortOptions[sort]

      // Determine sort direction
      const sortDir = this.sortOptions[sort] ? 'asc' : 'desc'

      // Reset all sort options
      for (const type in this.sortOptions) {
        this.sortOptions[type] = false;
      }
      this.sortOptions[sort] = sortOption

      this.store.dispatch(ListPageActions.loadCoinsList({ sort, sortDir}));
    }

    public filterListResults(term) {
        this.filterTerm = term;
    }
}
