import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { YoutubePlayerModule } from 'another-ng-youtube-player';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AppModalComponent } from './app-modal.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { HeroOneComponent } from './hero-one/hero-one.component';
import { AppNavbarComponent } from './navbar/navbar.component';

import { AppService } from './app.service';
import { AppModalService } from './app-modal.service';
import { ProjectsComponent } from './projects/projects.component';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HeroOneComponent,
    AppModalComponent,
    AppNavbarComponent,
    ProjectsComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    YoutubePlayerModule
  ],
  providers: [AppService, AppModalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
