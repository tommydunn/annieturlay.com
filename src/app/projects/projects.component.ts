import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { AppModalService } from '../app-modal.service';
import { Project } from '../project';
import { PROJECTS } from '../projects';
import * as $ from 'jquery';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  mouseEvent;
  projects = PROJECTS;
  project: Project;
  html5Player;
  public currentIndex: number;
  public selectedProject: Project;
  public element: JQuery;
  private id = '';
  private player: any;
  private ytEvent: any;

  @HostListener('document:mouseenter', ['$event'])
  onMouseMove(e) {
    // this.mouseEvent = e;
  }

  constructor(private sanitizer: DomSanitizer,
    private el: ElementRef,
    private modalService: AppModalService) { }

  @HostListener('mouseenter') onMouseEnter() {
    // this.html5Player = document.getElementsByClassName('html5-player')[0];
    // this.html5Player.classList.add('active');
    // this.html5Player.play();
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this.html5Player = document.getElementsByClassName('html5-player.active')[0];
    // this.html5Player.classList.remove('active');
    // this.html5Player.stop();
  }

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
    this.player.playVideo();
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
