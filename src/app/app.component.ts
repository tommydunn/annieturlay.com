import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

import { Project } from './project';
import { PROJECTS } from './projects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  mouseEvent;
  projects = PROJECTS;
  project: Project;

  public currentIndex: number;
  public selectedProject: Project = this.projects[this.currentIndex];

  private id = '';
  private player: any;
  private ytEvent: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    // this.mouseEvent = e;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.selectedProject = null;
  }

  onSelect(project: Project, index: number): void {
    this.currentIndex = index;
    this.selectedProject = project;
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  stopVideo(): void {
    this.player.stopVideo();
  }

  exitPlayer(): void {
    // this.closeModal('custom-modal-1');
    this.selectedProject = null;
  }

  savePlayer(player) {
    this.player = player;
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
    this.selectedProject = null;
  }
}
