import { Component, OnInit } from '@angular/core';
import { PLAYLIST_DATA } from '../data/play-list';
import { playVideo, pauseVideo, stopVideo } from '../helpers/yt-player.helpers';

@Component({
  selector: 'playlist-titles',
  templateUrl: './playlist-titles.component.html',
  styleUrls: ['./playlist-titles.component.css']
})
export class PlaylistTitlesComponent implements OnInit {

  public playListData;
  constructor() { }

  ngOnInit(): void {
    this.playListData = PLAYLIST_DATA;
  }

  public onPlay(id: number) {
    console.log('**calling play video id',id);
    playVideo(id);
  }

  public onPause(id: number) {
    pauseVideo(id);
  }

  public onStop(id: number) {
    stopVideo(id);
  }

}
