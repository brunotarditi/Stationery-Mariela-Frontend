import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StorageService } from 'src/app/shared/services/storage.service';
import { StylesService } from 'src/app/shared/services/styles.service';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  status: string = '';

  constructor(
    private storageService: StorageService,
    private stylesService: StylesService) { }

  ngOnInit(): void {

    this.modeInStorage();
    this.openOrCloseSidebar();
  }

  modeInStorage() {
    const mode = this.storageService.get('mode');
    if (mode && mode === 'dark') {
      document.body.classList.toggle('dark');
    }
  }

  openOrCloseSidebar() {
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
