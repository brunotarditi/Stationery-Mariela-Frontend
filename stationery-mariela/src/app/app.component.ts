import { Component, OnInit} from '@angular/core';
import { StylesService } from './shared/services/styles.service';
import { StorageService } from './shared/services/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  status: string = '';
  constructor(
    private storageService: StorageService,
    private stylesService: StylesService){}

  ngOnInit(): void {
    this.modeInStorage();
    this.openOrCloseSidebar();
  }

  modeInStorage(){
    const mode = this.storageService.get('mode');
    if(mode && mode === 'dark'){
      document.body.classList.toggle('dark');
    }
  }

  openOrCloseSidebar(){
    if (this.storageService.exist('status')) {
      this.status = this.storageService.get('status');
    }
    this.stylesService.sidebar$.subscribe({
      next: (data: string) => {
        this.status = data;
        this.storageService.set('status', data);
      },
      error: (err: string) => console.log(err)
    })
  }

}
