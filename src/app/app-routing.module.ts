import { SixPageComponent } from './page-objects/six-page/six-page.component';
import { ContactComponent } from './page-objects/five-page/contact/contact.component';
import { AboutComponent } from './page-objects/five-page/about/about.component';
import { FivePageComponent } from './page-objects/five-page/five-page.component';
import { FourthPageComponent } from './page-objects/fourth-page/fourth-page.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpLinkComponent } from './page-objects/first-page/help-link/help-link.component';
import { SecondPageComponent } from './page-objects/second-page/second-page.component';
import { ThirdPageComponent } from './page-objects/third-page/third-page.component';

const routes: Routes = [
  {path: '', component: HelpLinkComponent},
  {path: 'firstofassignment', component: SecondPageComponent},
  {path: 'secondhomework', component: ThirdPageComponent},
  {path: 'thirdhomework', component: FourthPageComponent},
  {path: 'fivepage', component: FivePageComponent},
  {path: 'fivepage/about', component: AboutComponent},
  {path: 'fivepage/contact', component: ContactComponent},
  {path: 'sixpage', component: SixPageComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
