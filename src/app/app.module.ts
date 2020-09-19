import { browser } from 'protractor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import{NoopAnimationsModule} from  '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MainheaderComponent } from './mainheader/mainheader.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainheaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatRippleModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
    
    {
      path:'login/', component : LoginComponent
    },
  ]) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
