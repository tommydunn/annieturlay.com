import { Component, OnInit, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppModalService } from './app-modal.service';
import { Project } from './project';
import { PROJECTS } from './projects';
import * as $ from 'jquery';

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
  public selectedProject: Project;
  public element: JQuery;
  private id = '';
  private player: any;
  private ytEvent: any;

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(e) {
    // this.mouseEvent = e;
  }

  constructor(private sanitizer: DomSanitizer,
    private modalService: AppModalService) { }

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

  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
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

  showModal(): void {
    this.openModal('custom-modal-1');
  }

  exitModal(): void {
    this.closeModal('custom-modal-1');
    this.selectedProject = null;
  }
}
