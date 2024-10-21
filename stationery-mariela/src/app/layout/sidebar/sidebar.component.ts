import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { StylesService } from 'src/app/shared/services/styles.service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  changeMode: string = 'Modo oscuro';
  iconMode: string = 'uil uil-moon';
  status: string = '';

  constructor(
    private stylesService: StylesService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.openOrCloseSidebar();
    if (this.storageService.exist('status')) {
      const status = this.storageService.get('status');
      this.status = status;
    }
  }

  toggleTheme() {
    this.iconMode = this.iconMode === 'uil uil-bright' ? 'uil uil-moon' : 'uil uil-bright'
    this.changeMode = this.changeMode === 'Modo claro' ? 'Modo oscuro' : 'Modo claro';
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      this.storageService.set('mode', 'dark')
    } else {
      this.storageService.set('mode', 'light')
    }
  }

  openOrCloseSidebar() {
    this.stylesService.sidebar$.subscribe({
      next: (data: string) => {
        this.status = data;
        this.storageService.set('status', data);
      },
      error: (err: string) => console.log(err)
    })
  }

}
