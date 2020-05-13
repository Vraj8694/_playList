import { Component, OnInit } from '@angular/core';
import { PLAYLIST_DATA } from '../data/play-list'

@Component({
  selector: 'playlist-videos',
  templateUrl: './playlist-videos.component.html',
  styleUrls: ['./playlist-videos.component.css']
})
export class PlayListVideosComponent implements OnInit {

  public playlistData = PLAYLIST_DATA
  public vd: any = null
  constructor() { }

  ngOnInit(): void {
  }

}


