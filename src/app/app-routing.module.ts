import { GreetingComponent } from './greeting/greeting.component';
import { CheckComponent } from './check/check.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { ForgotPasswordComponent } from 'src/app/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from 'src/app/verify-email/verify-email.component';
import { AuthGuard } from './services/auth.guard';
import { HmComponent } from './hm/hm.component';
import { CodeComponent } from './code/code.component';
import { HtmlComponent } from './html/html.component';
import { CComponent } from './c/c.component';
import { AngularComponent } from './angular/angular.component';
import { CppComponent } from './cpp/cpp.component';
import { Homepagenave12Component } from './homepagenave12/homepagenave12.component';
import { ShopnavComponent } from './shopnav/shopnav.component';
import { ProfileComponent } from "./profile/profile.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { PdfsComponent } from './pdfs/pdfs.component';
import { AboutComponent } from './about/about.component';
const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent ,canActivate:[AuthGuard],
    children:[
      { path:'',redirectTo:'home',pathMatch:'full'},
      { path:'home',component:Homepagenave12Component},
      { path: 'homenavbar', component: Homepagenave12Component },
      { path: 'shopnavbar', component: ShopnavComponent},
      { path:'check' ,component:CheckComponent},
      { path:'greeting', component:GreetingComponent},
      { path:'pdf',component:PdfsComponent},
      { path:'about',component:AboutComponent},
    //   {path:'home-page',component:MainheaderComponent},
      {path:'code-section',component:CodeComponent,
        children:[
         {path:'',redirectTo:'code-head',pathMatch:'full'},
         // {path:'code-head',component:CodeComponent},
          {path:'code-head',component:HmComponent},
          {path:'html',component:HtmlComponent},
          {path:'css',component:CComponent},
          {path:'angular',component:AngularComponent},
          {path:'cpp',component:CppComponent},

        ]
          
    },
    {path:'profile',component:ProfileComponent}
    ]
  },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
