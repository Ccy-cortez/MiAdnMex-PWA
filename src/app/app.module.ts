import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

// Routes
import { APP_ROUTES } from './app.routes';

// Modules
import { PagesModule } from './pages/pages.module';


// Components
import { AppComponent } from './app.component';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    APP_ROUTES,
    PagesModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})export class AppModule { }


