import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoinsListPageComponent } from './containers';

export const routes: Routes = [
  {
    path: '',
    component: CoinsListPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoinsRoutingModule {}
