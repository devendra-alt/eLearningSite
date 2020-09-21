import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements OnInit {
  viewMode='home';
  name = 'Angular';
  goToTop(){
    window.scrollTo(0,0);
  }  
  constructor() { }

  ngOnInit(): void {
  }

}
