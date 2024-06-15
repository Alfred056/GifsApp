import { Component, Output, EventEmitter } from '@angular/core';
import { GiphyService } from '../giphy.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  value: string = '';
  @Output() sendSearch = new EventEmitter<string>();
  gifs: any[] = [];
  constructor(private giphyService: GiphyService) { }

  addSearch() {
    //Agregar la busqueda al historial
    if (this.value.trim() !== '') {
      this.sendSearch.emit(this.value.trim());
      
      // Hacer la solicitud a la API
      this.giphyService.searchGifs(this.value.trim()).subscribe(response => {
        this.gifs = response.data;
      });
      
      this.value = '';
    }
  }

}
