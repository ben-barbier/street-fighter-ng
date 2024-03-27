import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';
import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class CharactersService {
  private _http = inject(HttpClient);

  public getAll(): Observable<Character[]> {
    return this._http.get<Character[]>(`${environment.apiUrl}/characters`);
  }

  public get(id: string): Observable<Character> {
    return this._http.get<Character>(`${environment.apiUrl}/characters/${id}`);
  }

  public create(character: Character): Observable<void> {
    return this._http.post<void>(`${environment.apiUrl}/characters`, character);
  }

  public update(character: Character): Observable<void> {
    return this._http.put<void>(`${environment.apiUrl}/characters/${character.id}`, character);
  }

  public delete(id: string): Observable<void> {
    return this._http.delete<void>(`${environment.apiUrl}/characters/${id}`);
  }

  public fight(character1: Character, character2: Character): Observable<Character> {
    return this._http.get<Character>(`${environment.apiUrl}/characters/${character1.id}/fight?versus=${character2.id}`);
  }

  public getPictureUrl(character: Character): string {
    return `http://localhost:3000/assets/characters/${character.id}_thumbnail.png`;
  }
}
