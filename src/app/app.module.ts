import { DataStoreService } from './service/data-store.service';
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
import { DisplayListComponent } from './page-objects/fourth-page/display-list/display-list.component';
import { AddListComponent } from './page-objects/fourth-page/add-list/add-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelpLinkComponent,
    SecondPageComponent,
    ShowListComponent,
    AddItemComponent,
    ThirdPageComponent,
    FourthPageComponent,
    DisplayListComponent,
    AddListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
