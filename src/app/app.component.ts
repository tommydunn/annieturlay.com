import { Component } from '@angular/core';
import { EmbedVideoService } from 'ngx-embed-video';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  vimeoUrl = 'https://vimeo.com/262705748';
  vimeoId = '262705748';
  iframe_html: any;
  iframe_html2: any;
  iframe_html3: any;
  iframe_html4: any;
  iframe_html5: any;

  constructor(private embedService: EmbedVideoService) {
    this.embedService.embed(this.vimeoUrl);
    this.iframe_html = this.embedService.embed_vimeo(this.vimeoId);
    this.iframe_html2 = this.embedService.embed_vimeo('055b16ca7a', { query: { portrait: 0, color: '333' } });

  }
}
