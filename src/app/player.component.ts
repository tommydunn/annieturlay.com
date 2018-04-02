import { Component, ViewChildren, AfterViewInit } from '@angular/core';
import * as Player from '@vimeo/player/dist/player.js';

@Component({
  selector: 'app-player',
  template: `<div #player_container></div>`
})
export class PlayerComponent implements AfterViewInit {

  private player: Player;
  @ViewChildren('player_container') playerContainer;

  ngAfterViewInit(): void {

    this.playerContainer.changes.subscribe(item => {
      if (this.playerContainer.length) {

        this.player = new Player(this.playerContainer.first.nativeElement);

        this.player.on('play', function() {
          console.log('played the video!');
        });

        this.player.getVideoTitle().then(function(title) {
          console.log('title:', title);
        });
      }
    });
  }
}
