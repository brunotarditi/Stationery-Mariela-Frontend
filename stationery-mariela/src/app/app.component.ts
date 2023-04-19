import { Component } from '@angular/core';
import { StylesService } from './services/styles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  active: string = "";

  title = 'stationery-mariela';
  constructor(
    private stylesService: StylesService){}

  toggleSidebar(){
    this.stylesService.sidebar$.emit('close');
    this.active = this.active === '' ? 'close': '';
  }
}
