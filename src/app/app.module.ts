import { browser } from 'protractor';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { ShopheaderComponent } from './shopheader/shopheader.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './shoppingcart/cart/cart.component';
import { FiltersComponent } from './shoppingcart/filters/filters.component';
import { ProductsComponent } from './shoppingcart/products/products.component';
import { CartListComponent } from './shoppingcart/cart/cart-list/cart-list.component';
import { ProductitemComponent } from './shoppingcart/products/productitem/productitem.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainheaderComponent,
    ShopheaderComponent,
    ShopnavComponent,
    ShopfooterComponent,
    ShoppingcartComponent,
    CheckoutComponent,
    CartComponent,
    FiltersComponent,
    ProductsComponent,
    CartListComponent,
    ProductitemComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCheckboxModule,
    MatRippleModule,
    MatSlideToggleModule,
    RouterModule.forRoot([
    
    {
      path:'login/', component : LoginComponent
    },
  ]),
    NgbModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
