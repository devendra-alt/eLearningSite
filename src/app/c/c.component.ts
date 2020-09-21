import { Component, OnInit } from '@angular/core';
import {FormGroup } from '@angular/forms';


@Component({
  selector: 'app-c',
  templateUrl: './c.component.html',
  styleUrls: ['./c.component.css']
})
export class CComponent implements OnInit {
  viewMode='home';
  name = 'Angular';
  goToTop(){
    window.scrollTo(0,0);
  }  
  constructor() { }

  ngOnInit(): void {
    
  } 

}
