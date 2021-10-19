import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-button',
  templateUrl: './navbar-button.component.html',
  styleUrls: ['./navbar-button.component.scss'],
})
export class NavbarButtonComponent {
  constructor() {}

  @Input() item: { name: string; url: string; icon: string } = {
    name: '',
    url: '',
    icon: '',
  };
  ngOnInit(): void {}
}
