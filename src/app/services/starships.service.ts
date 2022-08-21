import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StarshipsService {
  private _url: string = 'https://swapi.dev/api/starships';

  constructor(private httpClient: HttpClient) {}

  getStarships(url?: string): Observable<Data> {
    if (url === undefined) url = this._url;
    return this.httpClient.get<Data>(url);
  }
}
