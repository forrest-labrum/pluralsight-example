import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, BaseRequestOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { routing } from './app.routes';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { MockBackend } from '@angular/http/testing';

import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { ResponderService } from './services/responder.service';

import { AppComponent } from './app.component';
import { TitleBarComponent } from './components/title-bar/title-bar.component';
import { TitleCardComponent } from './components/title-card/title-card.component';
import { TitleCardRowComponent } from './components/title-card-row/title-card-row.component';
import { TitleTableComponent } from './components/title-table/title-table.component';
import { FullWindowContainerComponent } from './components/full-window-container/full-window-container.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubeModalComponent } from './components/youtube-modal/youtube-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleBarComponent,
    TitleCardComponent,
    TitleCardRowComponent,
    TitleTableComponent,
    FullWindowContainerComponent,
    PricingComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    YoutubeModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    UserService,
    AuthService,
    ResponderService,
    MockBackend,
    BaseRequestOptions
  ],
  entryComponents: [
    YoutubeModalComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
