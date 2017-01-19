import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {AppComponent}  from './app.component';
import {HeroesComponent} from './heroes.component'
import {HeroDetailComponent} from './hero-detail.component';
import {NewHeroComponent} from './new-hero.component';
import {DashboardComponent} from './dashboard.component';
import {HeroService} from './hero.service';
import {AppRoutingModule} from './app-routing.module';
// in memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';


@NgModule({
  imports: [
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
  ],
  declarations: [ 
    AppComponent,
    HeroesComponent, 
    HeroDetailComponent, 
    NewHeroComponent,
    DashboardComponent,
  ],
  providers: [HeroService],
  bootstrap:    [ AppComponent ],
})

export class AppModule { }