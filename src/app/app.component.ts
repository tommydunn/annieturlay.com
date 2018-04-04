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
  selectedProject: Project;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    this.mouseEvent = e;
  }

  constructor() { }

  ngOnInit() {
  }

  onSelect(project: Project): void {
    this.selectedProject = project;
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