import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
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
