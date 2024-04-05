import { inject, Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.models';

export const selectCharacters = createFeatureSelector<CharacterDTO[]>('characters');
const selectCharacter = (id: string) =>
  createSelector(selectCharacters, (state: CharacterDTO[]) => state.find(c => c.id === id));
// TODO: countries dans le store + get charatcers with country flag

@Injectable({
  providedIn: 'root',
})
export class CharactersSelectors {
  private store = inject(Store);

  public characters$ = this.store.select(selectCharacters);
  public character$ = (id: string) => this.store.select(selectCharacter(id));
}
