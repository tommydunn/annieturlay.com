import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeroOneComponent } from './hero-one/hero-one.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeroOneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
