import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile-menu-open-button',
  templateUrl: './mobile-menu-open-button.component.html',
  styleUrls: ['./mobile-menu-open-button.component.scss'],
})
export class MobileMenuOpenButtonComponent implements OnInit {
  menu = false;
  constructor() {}

  ngOnInit(): void {}

  openMenu() {
    let menuelement = document.querySelector(
      '.mobile-menu-container'
    ) as HTMLElement;
    if (!this.menu) {
      menuelement.style.transform = 'translateY(0)';
      this.menu = !this.menu;
    } else {
      menuelement.style.transform = 'translateY(-2000px)';
      this.menu = !this.menu;
    }
  }
}
