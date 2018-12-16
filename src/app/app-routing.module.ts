import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelpLinkComponent } from './page-objects/first-page/help-link/help-link.component';
import { SecondPageComponent } from './page-objects/second-page/second-page/second-page.component';

const routes: Routes = [
  {path: '', component: HelpLinkComponent},
  {path: 'firstofassignment', component: SecondPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
