import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PlayListVideosComponent } from './playlist-videos/playlist-videos.component';
import { CustomVideoComponent } from './custom-video/custom-video.component';
import { NewPlayListComponent } from './new-play-list/new-play-list.component';
import { PlaylistTitlesComponent } from './playlist-titles/playlist-titles.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PlayListVideosComponent,
    NewPlayListComponent,
    CustomVideoComponent,
    PlaylistTitlesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
