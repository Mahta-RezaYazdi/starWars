import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PeopleService {
  private _url: string = 'https://swapi.dev/api/people';

  constructor(private httpClient: HttpClient) {}

  getCharacters(url?: string): Observable<Data> {
    if (url === undefined) url = this._url;
    return this.httpClient.get<Data>(url);
  }
}
