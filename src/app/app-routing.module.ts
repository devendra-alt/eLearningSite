import { Homepagenave12Component } from './homepagenave12/homepagenave12.component';
import { Homepagefooter12Component } from './homepagefooter12/homepagefooter12.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { LoginComponent } from './login/login.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { NgModule, Component } from '@angular/core';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import { Routes, RouterModule } from '@angular/router';
import { CheckComponent } from './check/check.component';


const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'homenavbar', component: Homepagenave12Component },
  { path: 'shopnavbar', component: ShopnavComponent },
  { path: 'check', component: CheckComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
