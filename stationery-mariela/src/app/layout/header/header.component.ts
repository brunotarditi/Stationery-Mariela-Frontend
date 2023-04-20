import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { StylesService } from 'src/app/shared/services/styles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  status: string = '';
  constructor(
    private stylesService: StylesService,
    private storageService: StorageService) { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    if (this.storageService.exist('status')) {
      this.status = this.storageService.get('status') === 'close' ? 'open' : 'close';
      this.stylesService.sidebar$.emit(this.status);
    }else{
      this.stylesService.sidebar$.emit('close');
    }
  }

}
