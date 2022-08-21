import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Data } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  private _url: string = 'https://swapi.dev/api/species';

  constructor(private httpClient: HttpClient) {}

  getSpecies(url?: string): Observable<Data> {
    if (url === undefined) url = this._url;
    return this.httpClient.get<Data>(url);
  }
}
