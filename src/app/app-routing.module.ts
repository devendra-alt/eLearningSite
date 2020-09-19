import { CheckoutComponent } from './checkout/checkout.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ShopfooterComponent } from './shopfooter/shopfooter.component';
import { LoginComponent } from './login/login.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { NgModule } from '@angular/core';
import {ShoppingcartComponent} from './shoppingcart/shoppingcart.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', redirectTo:'/mainheader',pathMatch:'full'},
  {path:'mainheader', component:MainheaderComponent},
  {path:'login',component:LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
