import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  value: string = '';
  @Output() sendSearch = new EventEmitter<string>();

  constructor() {}

  addSearch() {
    if (this.value.trim() !== '') {
      this.sendSearch.emit(this.value.trim());
      this.value = '';
    }
  }
}
