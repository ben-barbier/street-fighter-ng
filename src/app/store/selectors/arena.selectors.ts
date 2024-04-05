import { inject, Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, Store } from '@ngrx/store';
import { ArenaState } from '../../shared/models/arena.models';
import { CharacterDTO } from '../../shared/models/character.models';
import { selectCharacters } from './characters.selectors';

const selectArena = createFeatureSelector<ArenaState>('arena');
const selectFighters = createSelector(selectArena, selectCharacters, (arenaState, charactersState) => {
  return [
    charactersState.find(c => c.id === arenaState.character1),
    charactersState.find(c => c.id === arenaState.character2),
  ];
});
const selectWinner = createSelector(selectArena, selectCharacters, (arenaState, charactersState) => {
  return charactersState.find(c => c.id === arenaState.winner);
});
const selectIsInArena = (character: CharacterDTO) =>
  createSelector(selectFighters, fighters => !!character && fighters.some(f => f?.id === character.id));
const selectIsArenaFull = createSelector(selectFighters, fighters => fighters.filter(Boolean).length === 2);

@Injectable({
  providedIn: 'root',
})
export class ArenaSelectors {
  private store = inject(Store);

  public fighters$ = this.store.select(selectFighters);
  public winner$ = this.store.select(selectWinner);
  public isInArena$ = (character: CharacterDTO) => this.store.select(selectIsInArena(character));
  public isArenaFull$ = this.store.select(selectIsArenaFull);
}
