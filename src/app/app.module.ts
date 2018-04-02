import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { PlayerComponent } from './player.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, PlayerComponent]
})
export class AppModule { }
