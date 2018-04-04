import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { YoutubePlayerModule } from 'another-ng-youtube-player';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeroOneComponent } from './hero-one/hero-one.component';
import { AppService } from './app.service';
@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeroOneComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    YoutubePlayerModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
