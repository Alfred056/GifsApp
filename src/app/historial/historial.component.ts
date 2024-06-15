import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Search } from './search.model';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent {
  searchs: Search[] = [];
  @Output() valueSelected = new EventEmitter<string>();
  receiveSearch(search: string) {
    const newSearch = new Search(search);
    this.searchs.push(newSearch);
  }

}
