import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { concatAll, forkJoin, mergeMap, Observable, toArray } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { Character, CharacterDTO } from '../models/character.models';
import { CountryDTO } from '../models/country.models';
import { CountriesService } from './countries.service';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private _http = inject(HttpClient);
  private _countriesService = inject(CountriesService);

  public getAll(): Observable<CharacterDTO[]> {
    // Ex1 : Ajouter 42 à tous les stun des characters qui ont un stamina > 1000.
    return this._http.get<CharacterDTO[]>(`${environment.apiUrl}/characters`).pipe(
      concatAll(), // [C1, C2, C3, ...] => C1 - C2 - C3 - ...
      map((character: CharacterDTO): CharacterDTO => {
        return character.stamina > 1000 ? { ...character, stun: character.stun + 42 } : character;
      }),
      toArray()
    );
  }

  public getAllWithCountry(): Observable<Character[]> {
    return this.getAll().pipe(
      concatAll(),
      mergeMap((character: CharacterDTO): Observable<Character> => {
        return this._countriesService.get(character.country).pipe(
          map((country: CountryDTO): Character => {
            return { ...character, countryFlagUrl: country.flagUrl };
          })
        );
      }),
      toArray()
    );
  }

  public getAllWithCountry2(): Observable<Character[]> {
    return forkJoin([this.getAll(), this._countriesService.getAll()]).pipe(
      map(([characters, countries]) => {
        return characters.map((character): Character => {
          return {
            ...character,
            countryFlagUrl: countries.find(country => country.name === character.country)!.flagUrl,
          };
        });
      })
    );
  }

  public get(id: string): Observable<CharacterDTO> {
    return this._http.get<CharacterDTO>(`${environment.apiUrl}/characters/${id}`);
  }

  public create(character: CharacterDTO): Observable<void> {
    return this._http.post<void>(`${environment.apiUrl}/characters`, character);
  }

  public update(character: CharacterDTO): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl}/characters/${character.id}`, character);
  }

  public delete(character: CharacterDTO): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/characters/${character.id}`);
  }

  public fight(character1: CharacterDTO, character2: CharacterDTO): Observable<CharacterDTO> {
    return this._http.get<CharacterDTO>(
      `${environment.apiUrl}/characters/${character1.id}/fight?versus=${character2.id}`
    );
  }

  public getPictureUrl(character: CharacterDTO): string {
    return `http://localhost:3000/assets/characters/${character.id}_thumbnail.png`;
  }
}
