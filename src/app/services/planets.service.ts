import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PlanetsService {
  private _url: string = 'https://swapi.dev/api/planets';

  constructor(private httpClient: HttpClient) {}

  getPlanets(url?: string): Observable<Data> {
    if (url === undefined) url = this._url;
    return this.httpClient.get<Data>(url);
  }
}
