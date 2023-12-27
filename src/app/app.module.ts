import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//modulos
import { LoginModule } from './modules/login/login.module';
import { NotFountComponent } from './not-fount/not-fount.component';
import { ProctectedPageModule } from './modules/protected-page/proctected-page.module';
import { HeaderComponent } from '../shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFountComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //modulos
    LoginModule,
    ProctectedPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
