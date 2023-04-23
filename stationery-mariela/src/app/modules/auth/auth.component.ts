import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  show: string = 'show';
  active: string = '';
  icons: {id: number, changeIcon: boolean}[] = [
    {id:1, changeIcon: true},
    {id:2, changeIcon: true},
    {id:3, changeIcon: true}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getForm(){
    this.show = 'show';
  }

  closeForm(){
    this.show = '';
  }


  signUpBtn(){
    this.active = 'active'
  }

  loginBtn(e:any){
    this.active = '';
  }

  login(){
    this.router.navigate(['/dashboard']);
  }

  register(){
    this.router.navigate(['/dashboard']);
  }
  changeTypeAndIcon(id: number){
      this.icons[id].changeIcon = !this.icons[id].changeIcon;
  }

}
