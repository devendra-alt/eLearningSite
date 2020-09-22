import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessService {
  subject = new Subject();

  constructor() {}

  throwmessage(Products) {
    console.log(Products);
    this.subject.next(Products);
  }
  fetchmessage() {
    return this.subject.asObservable();
  }
}
