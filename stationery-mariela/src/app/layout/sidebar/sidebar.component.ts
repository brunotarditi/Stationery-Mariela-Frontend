import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { StorageService } from 'src/app/shared/services/storage.service';
import { StylesService } from 'src/app/shared/services/styles.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('nav') nav!: ElementRef;
  changeMode: string = 'Modo oscuro';
  iconMode: string = 'uil uil-moon';

  constructor(
    private renderer2: Renderer2,
    private stylesService: StylesService,
    private storageService: StorageService) { }

  ngOnInit(): void {
    this.openOrCloseSidebar();
  }

  toggleTheme() {
    this.iconMode = this.iconMode === 'uil uil-bright' ? 'uil uil-moon' : 'uil uil-bright'
    this.changeMode = this.changeMode === 'Modo claro' ? 'Modo oscuro' : 'Modo claro';
    document.body.classList.toggle('dark');
    if (document.body.classList.contains('dark')) {
      this.storageService.set('mode', 'dark')
    }else{
      this.storageService.set('mode', 'light')
    }
  }

  openOrCloseSidebar(){
    this.stylesService.sidebar$.subscribe({
      next: (data: string) => {
        const active = this.nav.nativeElement.classList.contains('close');
        this.renderer2[active ? 'removeClass' : 'addClass'](this.nav.nativeElement, data);
        if (active) {
          this.storageService.set('status', 'close')
        }else{
          this.storageService.set('status', 'open')

        }
      },
      error: (err: string) => console.log(err)
    })
  }

}
