import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CodesComponent } from './codes/codes.component';
import { CComponent } from './c/c.component';
import {MatListModule} from '@angular/material/list';
import { HtmlComponent } from './html/html.component';
import { CppComponent } from './cpp/cpp.component';
import { AngularComponent } from './angular/angular.component';
import { HmComponent } from './hm/hm.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CodesComponent,
    CComponent,
    HtmlComponent,
    CppComponent,
    AngularComponent,
    HmComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    

    RouterModule.forRoot([
    
    {
      path:'login/', component : LoginComponent
    },
    
  ]),
    BrowserAnimationsModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
