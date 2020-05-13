import { Component, OnInit } from '@angular/core';
import { getNextPlayListId } from '../helpers/playlist.helpers';
import { PlayList } from '../types/play-list';
import { PLAYLIST_DATA } from '../data/play-list';
import { YOUTUBE_URL_REGEX } from '../helpers/yt-player.helpers';

@Component({
  selector: 'app-new-play-list',
  templateUrl: './new-play-list.component.html',
  styleUrls: ['./new-play-list.component.css']
})
export class NewPlayListComponent implements OnInit {
  public openPlaylistbtn:boolean=false;
  public name: string;
  public url: string;
  public submitted: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public isValidName() {
    return this.name && this.name.length;
  }

  public isValidYoutubeUrl() {
    try {
      return this.url && new URL(this.url) && this.url.match(YOUTUBE_URL_REGEX);
    } catch(ex) {
      return false;
    }
  }

  public addPlayList() {
    this.submitted = true;
    if (this.isValidName() && this.isValidYoutubeUrl()) {
      const nextPlayListId = getNextPlayListId();
      console.log('**next play list id', nextPlayListId);
      const newPlayListObject: PlayList = {
        id: nextPlayListId,
        name: this.name,
        link: this.url
      };
      PLAYLIST_DATA.push(newPlayListObject);
      console.log('*updated play list', PLAYLIST_DATA);
      this.openPlaylistbtn = false
    }
  }

  public openPlaylist(){
    this.openPlaylistbtn = !this.openPlaylistbtn
    console.log('check opebbtn')
  }

  public close(){
     this.openPlaylistbtn = false
     console.log('check x')
  }

  public isSubmitDisabled(): boolean {
    if (this.submitted ) {
      return !this.isValidName() || !this.isValidYoutubeUrl();
    }
    return false;
  }

  public getDisabledBtnClass(): string {
    return this.isSubmitDisabled() ? 'disabled-btn' : '';
  }
}
