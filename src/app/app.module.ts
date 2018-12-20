import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelpLinkComponent } from './page-objects/first-page/help-link/help-link.component';
import { SecondPageComponent } from './page-objects/second-page/second-page.component';
import { ShowListComponent } from './page-objects/second-page/show-list/show-list.component';
import { AddItemComponent } from './page-objects/second-page/add-item/add-item.component';
import { ThirdPageComponent } from './page-objects/third-page/third-page.component';
import { FourthPageComponent } from './page-objects/fourth-page/fourth-page.component';
import { DisplayObjectListComponent } from './page-objects/third-page/display-object-list/display-object-list.component';
import { AddObjectToListComponent } from './page-objects/third-page/add-object-to-list/add-object-to-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpLinkComponent,
    SecondPageComponent,
    ShowListComponent,
    AddItemComponent,
    ThirdPageComponent,
    FourthPageComponent,
    DisplayObjectListComponent,
    AddObjectToListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
