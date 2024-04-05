import { Action, ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { ArenaState } from '../../shared/models/arena.models';
import { CharacterDTO } from '../../shared/models/character.models';
import { CountryDTO } from '../../shared/models/country.models';
import { arenaReducer } from './arena.reducer';
import { charactersReducer } from './characters.reducer';
import { countriesReducer } from './countries.reducer';

export interface EntityState {
  characters: CharacterDTO[];
  countries: CountryDTO[];
  arena: ArenaState;
}

export const reducers: ActionReducerMap<EntityState> = {
  characters: charactersReducer,
  countries: countriesReducer,
  arena: arenaReducer,
  // here is where i put other reducers, when i have them
};

const localStorageSyncReducer = (reducer: ActionReducer<EntityState>): ActionReducer<EntityState> => {
  return localStorageSync({ keys: ['characters', 'countries'], rehydrate: true })(reducer);
};

export const metaReducers: MetaReducer<EntityState, Action>[] = [localStorageSyncReducer];
