import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  show: string = '';
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openForm(){
    this.show = 'show';
  }

  closeForm(){
    this.show = '';
  }

  login(){
    this.router.navigate(['/dashboard'])
  }

}
