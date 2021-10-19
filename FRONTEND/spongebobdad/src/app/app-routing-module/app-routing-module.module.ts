import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from '../views/contact-page/contact-page.component';
import { EpisodesListComponent } from '../views/episodes-list/episodes-list.component';
import { HomeComponent } from '../views/home/home.component';
import { LoginComponent } from '../views/login/login.component';
import { MerchandisingComponent } from '../views/merchandising/merchandising.component';
import { PageNotFoundComponent } from '../views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'episodes', component: EpisodesListComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'merchandising', component: MerchandisingComponent },
  { path: '**', component: PageNotFoundComponent },
];
export const routing = RouterModule.forRoot(routes);
