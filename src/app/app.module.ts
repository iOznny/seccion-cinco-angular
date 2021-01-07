import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

// Idiomas de la Aplicación
import { registerLocaleData } from "@angular/common";
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';
registerLocaleData(localEs);
registerLocaleData(localFr);

//Routes
import { APP_ROUTING } from "./app.routes";

//Services
import { HeroesService } from "./services/heroes.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroecardComponent } from './components/heroecard/heroecard.component';
import { PipesComponent } from './components/pipes/pipes.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeComponent,
    HeroecardComponent,
    PipesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    {
      provide: LOCALE_ID,
      useValue: 'es'
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
