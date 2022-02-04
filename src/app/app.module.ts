import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetComponent } from './components/planet/planet.component';
import { PersonComponent } from './components/person/person.component';

// You can read more about modules at https://angular.io/guide/architecture-modules

@NgModule({
  declarations: [
    AppComponent,
    PlanetComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
