import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { DataStoreService } from './service/data-store.service';

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
import { FivePageComponent } from './page-objects/five-page/five-page.component';
import { ContactComponent } from './page-objects/five-page/contact/contact.component';
import { HomeComponent } from './page-objects/five-page/home/home.component';
import { NavComponent } from './page-objects/nav/nav.component';
import { AboutComponent } from './page-objects/five-page/about/about.component';
import { SideBarComponent } from './page-objects/side-bar/side-bar.component';

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
    AddListComponent,
    FivePageComponent,
    ContactComponent,
    // SideBarComponent,
    HomeComponent,
    NavComponent,
    AboutComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
