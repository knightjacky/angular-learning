import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

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
import { SixPageComponent } from './page-objects/six-page/six-page.component';
import { UserListComponent } from './page-objects/six-page/user-list/user-list.component';
import { userReducer } from './page-objects/six-page/reducer';
import { UserEffects } from './page-objects/six-page/effect';

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
    AboutComponent,
    SixPageComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({userReducer}),
    EffectsModule.forRoot([UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    })

  ],
  providers: [DataStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
