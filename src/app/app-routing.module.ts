import { Homepagenave12Component } from './homepagenave12/homepagenave12.component';
import { Homepagefooter12Component } from './homepagefooter12/homepagefooter12.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { LoginComponent } from './login/login.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { NgModule, Component } from '@angular/core';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  { path: '', component: Homepagefooter12Component },
  {path:'' ,component:MainheaderComponent},
  {path:'' ,component:Homepagenave12Component}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
