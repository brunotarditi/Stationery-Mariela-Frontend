import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StylesService {

  sidebar$ = new EventEmitter<string>();
  constructor() { }
}
