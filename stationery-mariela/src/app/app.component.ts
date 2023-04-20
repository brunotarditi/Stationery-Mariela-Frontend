import { Component, OnInit, ViewChild, Renderer2 } from '@angular/core';
import { StylesService } from './shared/services/styles.service';
import { StorageService } from './shared/services/storage.service';
import { SidebarComponent } from './layout/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  active: string = "open";
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  constructor(
    private stylesService: StylesService,
    private storageService: StorageService,
    private renderer2: Renderer2){}

  ngOnInit(): void {
    this.modeInStorage();
  }

  toggleSidebar(){
    this.stylesService.sidebar$.emit('close');
    this.active = this.active === 'open' ? 'close': 'open';
  }

  modeInStorage(){
    const mode = this.storageService.get('mode');
    if(mode && mode === 'dark'){
      document.body.classList.toggle('dark');
    }
  }

}
