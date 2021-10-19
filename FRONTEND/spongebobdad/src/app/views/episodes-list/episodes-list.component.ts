import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-episodes-list',
  templateUrl: './episodes-list.component.html',
  styleUrls: ['./episodes-list.component.scss'],
})
export class EpisodesListComponent implements OnInit {
  episodes = [
    {
      name: 'San Patrick',
      image: 'assets/images/patrick.jpg',
      video: 'assets/video/',
    },
    {
      name: 'King Plankton',
      image: 'assets/images/kingplankton.jpg',
      video: 'assets/video/',
    },
    {
      name: 'Bob and Gary',
      image: 'assets/images/bobGary.webp',
      video: 'assets/video/',
    },
    {
      name: 'The Plankton revenge',
      image: 'assets/images/planktonrevenge.jpg',
      video: 'assets/video/',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
