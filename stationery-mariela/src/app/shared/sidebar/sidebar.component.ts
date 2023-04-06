import { Component, ElementRef, Input, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private renderer2: Renderer2) { }

  ngOnInit(): void {
  }

  toggleTheme() {
    document.body.classList.toggle('dark');
  }
}
