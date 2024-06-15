import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { HistorialComponent } from '../historial/historial.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent{
  @ViewChild(HistorialComponent) historialComponent!: HistorialComponent;
  constructor() {}

  receiveSearch(search: string) {
    this.historialComponent.receiveSearch(search);
  }

}
