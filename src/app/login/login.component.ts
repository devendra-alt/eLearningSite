import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  
})
export class LoginComponent implements OnInit {

   public username:any;
  public password:any;
  constructor() { }

  ngOnInit() {
  }
  LoginUser()
  {
    if(this.username == "Admin" && this.password == "admin123")
    {
      console.log("welcome");
    }
    else{
      console.log("enter correct username and password")
    }
  }

}
