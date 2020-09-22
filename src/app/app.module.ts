import { ProductitemComponent } from './shoppingcart/products/productitem/productitem.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Firebase services & enviorment module
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthServiceService } from './services/auth-service.service';
import { CodeComponent } from './code/code.component';
import { CppComponent } from './cpp/cpp.component';
import { AngularComponent } from './angular/angular.component';
import { CComponent } from './c/c.component';
import { HmComponent } from './hm/hm.component';
import { CommonModule } from '@angular/common';
import { HtmlComponent } from './html/html.component';
import { Homepagenave12Component } from 'src/app/homepagenave12/homepagenave12.component';
import { Homepagefooter12Component} from 'src/app/homepagefooter12/homepagefooter12.component';
import { MessService} from 'src/app/service/mess.service';
import { ProductsService} from 'src/app/service/products.service';
import { ShopheaderComponent } from "src/app/shopheader/shopheader.component";
import { ShopfooterComponent } from "src/app/shopfooter/shopfooter.component";
import { ShopnavComponent} from "src/app/shopnav/shopnav.component";
import { ShoppingcartComponent } from "src/app/shoppingcart/shoppingcart.component";
import { MainheaderComponent } from "src/app/mainheader/mainheader.component";
import {FiltersComponent} from "src/app/shoppingcart/filters/filters.component";
import { CartListComponent } from "src/app/shoppingcart/cart/cart-list/cart-list.component";
import {ProductsComponent} from "src/app/shoppingcart/products/products.component";
import { CartComponent } from './shoppingcart/cart/cart.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent,
    CodeComponent,
    CppComponent,
    AngularComponent,
    CComponent,
    AngularComponent,
    HmComponent,
    HtmlComponent,
    Homepagenave12Component,
    Homepagefooter12Component,
    ShopheaderComponent,
    ShopfooterComponent,
    ShopnavComponent,
    ShoppingcartComponent,
    MainheaderComponent,
    FiltersComponent,
    ProductsComponent,
    CartComponent,
    CartListComponent,
    MainheaderComponent,
    
    ProfileComponent,
    ProductitemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    CommonModule

  ],
  exports: [MatButtonModule,MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule, 
  ],

  providers: [AuthServiceService,MessService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
