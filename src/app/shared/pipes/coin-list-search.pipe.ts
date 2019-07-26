import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {

  transform(results: any, term: any): any {
    if(term === undefined || term === '') {
      return results;
    } else {

      const searchTerm = term.toLowerCase();
      return results.filter((item) => {
        const name = item.name.toLowerCase();
        const symbol = item.symbol.toLowerCase();
        if(name.includes(searchTerm) || symbol.includes(searchTerm)) {
            return true;
        }
      });
    }
  }
}