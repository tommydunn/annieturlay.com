import { Component, OnInit, HostListener } from '@angular/core';
import { Project } from './project';
import { PROJECTS } from './projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mouseEvent;
  id = 'KJamzD0KntE';
  private player;
  private ytEvent;
  projects = PROJECTS;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.mouseEvent = e;
    console.log(e);
  }

  constructor() { }

  ngOnInit() {
  }
  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }
}
