import { NgModule } from '@angular/core';

import { SearchFilterPipe } from './coin-list-search.pipe';

export const PIPES = [SearchFilterPipe];

@NgModule({
  declarations: PIPES,
  exports: PIPES,
})
export class PipesModule {}
