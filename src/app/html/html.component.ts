import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {
  viewMode='home';
  name = 'Angular';
  goToTop(){
    window.scrollTo(0,0);
  }  
  constructor() { }

  ngOnInit(): void {
  }

}
