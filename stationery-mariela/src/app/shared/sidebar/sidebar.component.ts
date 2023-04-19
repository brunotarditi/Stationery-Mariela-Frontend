import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { StylesService } from 'src/app/services/styles.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @ViewChild('nav') nav!: ElementRef;
  changeMode: string = 'Modo oscuro';
  iconMode: string = 'uil uil-moon'

  constructor(
    private renderer2: Renderer2,
    private stylesService: StylesService) { }

  ngOnInit(): void {
    this.stylesService.sidebar$.subscribe({
      next: (data: string) => {
        const active = this.nav.nativeElement.classList.contains('close');
        this.renderer2[active ? 'removeClass' : 'addClass'](this.nav.nativeElement, data)
      },
      error: (err: string) => console.log(err)
    })
  }

  toggleTheme() {
    this.iconMode = this.iconMode === 'uil uil-bright' ? 'uil uil-moon' : 'uil uil-bright'
    this.changeMode = this.changeMode === 'Modo claro' ? 'Modo oscuro' : 'Modo claro';
    document.body.classList.toggle('dark');
  }
}
