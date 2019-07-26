import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CoinsService {
  constructor (private http: HttpClient) {}

  getCoinListingLatest(sort?, sortDir?) {

    let sortQuery = '';
    if(sort) {
        const dir = sortDir ? sortDir : 'asc';
        sortQuery = `?sort=${sort}&sort_dir=${dir}`;
    }
    return this.http.get(`https://bitrader.herokuapp.com/api/cmc/listings${sortQuery}`);
  }
}
