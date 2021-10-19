import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { spongebobclothesmodel } from '../models/spongebobclothesmodel';
import { spongebobepisodemodel } from '../models/spongebobepisodemodel';

const httpOptionsUsingUrlEncoded = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class BackendConnectorService {
  endpointclothes: string = 'http://localhost:8080/SpongebobClothes';
  endpointepisodes: string = 'http://localhost:8080/SpongebobEpisode';

  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<spongebobclothesmodel[]> {
    return this.httpClient.get<spongebobclothesmodel[]>(this.endpointclothes);
  }
  getByIdProducts(id: number): Observable<spongebobclothesmodel> {
    return this.httpClient.get<spongebobclothesmodel>(
      this.endpointclothes + '/' + id
    );
  }
  getAllEpisodes(): Observable<spongebobepisodemodel[]> {
    return this.httpClient.get<spongebobepisodemodel[]>(this.endpointepisodes);
  }
}
