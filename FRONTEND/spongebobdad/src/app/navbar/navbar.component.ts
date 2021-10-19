import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  buttons = [
    {
      name: 'Episodes',
      url: '/episodes',
      icon: '../assets/icons/tv.png',
    },
    {
      name: 'Merchandising',
      url: 'merchandising',
      icon: '../assets/icons/shirt.png',
    },
    {
      name: 'Contact',
      url: '/contact',
      icon: '../assets/icons/message.png',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
