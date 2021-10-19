import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MobileMenuOpenButtonComponent } from './mobile-menu-open-button/mobile-menu-open-button.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { SizeselectorComponent } from './sizeselector/sizeselector.component';
import { EpisodeThumbnailComponent } from './episode-thumbnail/episode-thumbnail.component';
import { NavbarButtonComponent } from './navbar/navbar-button/navbar-button.component';
import { SizeComponent } from './sizeselector/size/size.component';
import { MerchandisingPreviewComponent } from './merchandising-preview/merchandising-preview.component';
import { HomeComponent } from './views/home/home.component';
import { MerchandisingComponent } from './views/merchandising/merchandising.component';
import { EpisodesListComponent } from './views/episodes-list/episodes-list.component';
import { ContactPageComponent } from './views/contact-page/contact-page.component';
import { LoginComponent } from './views/login/login.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { routing } from './app-routing-module/app-routing-module.module';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    NavbarComponent,
    MobileMenuOpenButtonComponent,
    MobileMenuComponent,
    SizeselectorComponent,
    EpisodeThumbnailComponent,
    NavbarButtonComponent,
    SizeComponent,
    MerchandisingPreviewComponent,
    HomeComponent,
    MerchandisingComponent,
    EpisodesListComponent,
    ContactPageComponent,
    LoginComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, routing, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
