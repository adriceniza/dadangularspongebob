import { Component, OnInit } from '@angular/core';
import { spongebobepisodemodel } from '../models/spongebobepisodemodel';
import { BackendConnectorService } from '../services/backend-connector.service';

@Component({
  selector: 'app-episode-thumbnail',
  templateUrl: './episode-thumbnail.component.html',
  styleUrls: ['./episode-thumbnail.component.scss'],
})
export class EpisodeThumbnailComponent implements OnInit {
  lastEpisode = {
    name: 'The Plankton revenge',
    image: 'assets/images/planktonrevenge.jpg',
    video: 'assets/video/',
  };

  public spongebobepisodes: Array<spongebobepisodemodel> = [];
  // public spongebobclothing: spongebobclothesmodel;
  constructor(private spongebobservice: BackendConnectorService) {}

  ngOnInit(): void {
    this.loadEpisodes();
  }
  loadEpisodes() {
    console.log('hey');
    this.spongebobservice
      .getAllEpisodes()
      .subscribe((b: Array<spongebobepisodemodel>) => {
        this.spongebobepisodes = b;
        console.log(b);
      });
  }
}
