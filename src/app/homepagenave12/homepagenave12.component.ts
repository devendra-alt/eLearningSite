import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../services/auth-service.service';

@Component({
  selector: 'app-homepagenave12',
  templateUrl: './homepagenave12.component.html',
  styleUrls: ['./homepagenave12.component.css']
})
export class Homepagenave12Component implements OnInit {

  constructor(
    public authService:AuthServiceService
  ) { }

  ngOnInit(): void {
  }

}
