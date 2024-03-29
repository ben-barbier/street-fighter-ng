import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CountryDTO } from '../models/country.models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CountriesService {
  private _http = inject(HttpClient);

  public getAll(): Observable<CountryDTO[]> {
    return this._http.get<CountryDTO[]>(`${environment.apiUrl}/countries`);
  }

  public get(name: string): Observable<CountryDTO> {
    return this._http.get<CountryDTO>(`${environment.apiUrl}/countries/${name}`);
  }
}
