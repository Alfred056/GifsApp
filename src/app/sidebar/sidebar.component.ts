import { Component, ViewChild } from '@angular/core';
import { HistorialComponent } from '../historial/historial.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @ViewChild(HistorialComponent) historialComponent!: HistorialComponent;

  receiveSearch(search: string) {
    this.historialComponent.receiveSearch(search);
  }
}