import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  episode = {
    name: 'The Plankton revenge',
    image: 'assets/images/planktonrevenge.jpg',
    video: 'assets/video/',
  };
  constructor() {
    this.showLastEpisode();
  }

  ngOnInit(): void {}
  showLastEpisode() {
    setTimeout(() => {
      let episodes = Array.from(
        document.getElementsByClassName(
          'episode'
        ) as HTMLCollectionOf<HTMLElement>
      );
      console.log(episodes);
      episodes.forEach((item) => {
        item.style.display = 'none';
      });
      episodes[episodes.length - 1].style.display = 'block';
    }, 100);
  }
}


