import { Component, OnInit } from '@angular/core';
import { playAllVideos, pauseAllVideos, stopAllVideos } from '../helpers/yt-player.helpers';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onPlayAll() {
    playAllVideos();
  }

  public onPauseAll() {
    pauseAllVideos();

  }

  public onStopAll() {
    stopAllVideos();

  }

}
