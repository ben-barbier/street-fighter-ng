import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CountryDTO } from '../models/country.models';

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

  public update(country: CountryDTO): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl}/characters/${country.name}`, country);
  }

  public delete(country: CountryDTO): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/characters/${country.name}`);
  }
}
