import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  @Input() links: number[];
  currentStep: number = 1;

  constructor() { }

  ngOnInit(): void {
  }
  step(index:number){
    this.currentStep = index + 1;
  }
  startBtn(){
    this.currentStep = 1;
  }

  prevBtn(){
    if (this.currentStep > 0) {
      this.currentStep = this.currentStep - 1;
    }
  }

  nextBtn(){
    if (this.currentStep < this.links.length) {
      this.currentStep = this.currentStep + 1;
    }
  }

  endBtn(){
      this.currentStep = this.links.length;
  }

}
