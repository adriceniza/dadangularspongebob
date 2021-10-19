import { Component, OnInit } from '@angular/core';
import { spongebobclothesmodel } from '../models/spongebobclothesmodel';
import { spongebobepisodemodel } from '../models/spongebobepisodemodel';
import { BackendConnectorService } from '../services/backend-connector.service';
@Component({
  selector: 'app-merchandising-preview',
  templateUrl: './merchandising-preview.component.html',
  styleUrls: ['./merchandising-preview.component.scss'],
})
export class MerchandisingPreviewComponent implements OnInit {
  public spongebobclothes: Array<spongebobclothesmodel> = [];
  // public spongebobclothing: spongebobclothesmodel;
  constructor(private spongebobservice: BackendConnectorService) {}

  ngOnInit(): void {
    this.loadMerchandising();
  }
  loadMerchandising() {
    console.log('hey');
    this.spongebobservice
      .getAllProducts()
      .subscribe((b: Array<spongebobclothesmodel>) => {
        this.spongebobclothes = b;
      });
  }
  openItem(item: any) {
    let itemDiv = document.getElementById('item') as HTMLElement;
    let divModel = document.getElementById('model') as HTMLElement;
    let divImg = document.getElementById('img') as HTMLElement;
    let divPrize = document.getElementById('prize') as HTMLElement;
    divModel.innerHTML = item.model;
    divImg.setAttribute('src', item.img);
    divPrize.innerHTML = item.prize + '€';
    itemDiv.style.display = 'flex';

    setTimeout(() => {
      itemDiv.style.transform = 'translateX(0)';
    }, 50);
  }
  closeItem() {
    let itemDiv = document.getElementById('item') as HTMLElement;
    let divModel = document.getElementById('model') as HTMLElement;
    let divImg = document.getElementById('img') as HTMLElement;
    let divPrize = document.getElementById('prize') as HTMLElement;
    itemDiv.style.transform = 'translateX(-3000px)';

    setTimeout(() => {
      itemDiv.style.display = 'none';
    }, 300);

    setTimeout(() => {
      divModel.innerHTML = '';
      divImg.setAttribute('src', '');
      divPrize.innerHTML = '';
    }, 300);
  }
}
