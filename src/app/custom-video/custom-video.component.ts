import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { YtPlayerService, StateChange, StateChangeType } from 'yt-player-angular';
import { PlayList } from '../types/play-list';
import { getLinkVideoId, getIframeId } from '../helpers/yt-player.helpers';


@Component({
  selector: 'custom-video',
  templateUrl: './custom-video.component.html',
  styleUrls: ['./custom-video.component.css']
})
export class CustomVideoComponent implements OnInit {
  @Input() videoData: PlayList;
  public videoLink: any;
  constructor(private _sanitizer: DomSanitizer) { }
 
  ngOnInit(): void {
    this.getVideoLink('https://www.youtube.com/embed/'+this.videoId+'?enablejsapi=1')
  }

  public get videoId(): string {
    return getLinkVideoId(this.videoData.link);
  }
  public get iframeId(): string {
    return getIframeId(this.videoData.id);
  }

  public getVideoLink(embeddedUrl: string): any {
    this.videoLink = this._sanitizer.bypassSecurityTrustResourceUrl(embeddedUrl);
  }

  public onStateChange(stateChange: StateChange): void {
    console.log(`Type: ${StateChangeType[stateChange.type]} || Payload: ${stateChange.payload}`);
  }

}