import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'coin-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class CoinSearchComponent implements OnInit {

  @Output()
  public searchTermEmitter:EventEmitter<string> = new EventEmitter<string>();

  public term:string = '';
  constructor() {}

  ngOnInit() {}

  emitSearchTerm() {
    this.searchTermEmitter.emit(this.term)
  }
}
