import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CComponent } from './c/c.component';
import { CodesComponent } from './codes/codes.component';
import { HtmlComponent } from './html/html.component';
import { CppComponent } from './cpp/cpp.component';
import { AngularComponent } from './angular/angular.component';
import { HmComponent } from './hm/hm.component';


const routes: Routes = [
  { path:'' , component:HmComponent},
  {  path:'c-tutorial',component:CComponent},
  { path:'roots',component:CodesComponent},
  { path:'html-tutorial',component:HtmlComponent,},
  { path:'cpp-tutorial',component:CppComponent},
  { path:'angular-tutorial',component:AngularComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
