import { Component, EventEmitter, ElementRef, HostListener, Inject } from '@angular/core';
import { Router, RouterModule, NavigationStart, NavigationEnd, Event } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  template: `
  <nav class="app-nav">
    <ul>
    <li (click)="goToProjects()" class="app-nav__item">
      <a class="app-nav__link" [routerLink]="['/projects']" routerLinkActive="nav-link--is-active">Projects</a>
    </li>
      <li (click)="goToAboutMe()" class="app-nav__item">
        <a class="app-nav__link" [routerLink]="['/about-me']" routerLinkActive="nav-link--is-active">About Me</a>
      </li>
      <li (click)="goToResume()" class="app-nav__item">
        <a class="app-nav__link" [routerLink]="['/resume']" routerLinkActive="nav-link--is-active">Resume</a>
      </li>
    </ul>
  </nav>`,
  styles: [`
    ul {
      margin-top: 0;
      margin-bottom: 0;
    }
    a {
      font-size: .99rem;
      line-height: .99rem;
    }
    `]
})
export class AppNavbarComponent {

  public navIsFixed: boolean;
  public isHome: boolean;
  constructor(@Inject(DOCUMENT) private document: any,
    private router: Router,
    private element: ElementRef) {

    router.events.subscribe((event: Event) => {
      document.body.classList.remove('nav--is-open');
    });
  }

  toggleNav() {
    document.body.classList.toggle('nav--is-open');
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const number = this.document.body.scrollTop;
    if (number > 100) {
      this.navIsFixed = true;
    } else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
  }

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  goToAboutMe() {
    this.router.navigate(['about-me']);
  }

  goToResume() {
    this.router.navigate(['resume']);
  }

}
