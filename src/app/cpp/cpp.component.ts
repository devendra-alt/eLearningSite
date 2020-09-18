import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpp',
  templateUrl: './cpp.component.html',
  styleUrls: ['./cpp.component.css']
})
export class CppComponent implements OnInit {
  viewMode='home';
  name = 'Angular';
  goToTop(){
    window.scrollTo(0,0);
  }  

  constructor() { }

  ngOnInit(): void {
  }

}
