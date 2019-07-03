import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StaticFlagComponent } from './static-flag/static-flag.component';
import { DogComponent } from './static-flag/dog/dog.component';

@NgModule({
  declarations: [
    AppComponent,
    StaticFlagComponent,
    DogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
