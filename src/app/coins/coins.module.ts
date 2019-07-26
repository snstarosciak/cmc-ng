import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule} from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PipesModule } from '../shared/pipes';
import { CoinsRoutingModule } from './coins-routing.module';

import { CoinsListPageComponent } from './containers';
import { CoinSearchComponent } from './components';

import * as listPage from './reducers/list-page.reducer';
import {ListPageEffects} from './effects/list-page.effects';

export const COMPONENTS = [
  CoinSearchComponent
];

export const CONTAINERS = [
  CoinsListPageComponent
];

@NgModule({
  declarations: [COMPONENTS, CONTAINERS],
  imports: [
    FormsModule,
    CoinsRoutingModule,
    PipesModule,
    CommonModule,
    StoreModule.forFeature('coins', listPage.reducer),
    EffectsModule.forFeature([ListPageEffects]),
  ]
})
export class CoinsModule {
}
