import { createReducer, on } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.models';
import { charactersActions } from '../actions/characters.actions';

const initialState: CharacterDTO[] = [];

export const charactersReducer = createReducer(
  initialState,
  on(charactersActions.getAllSuccess, (state, { characters }) => characters),
  on(charactersActions.updateSuccess, (state, { character }) =>
    state.map(u => (u.id === character.id ? character : u))
  ),
  on(charactersActions.deleteSuccess, (state, { character }) => state.filter(u => u.id !== character.id)),
  on(charactersActions.getSuccess, (state, { character }) => {
    const characterIsPresent = state.some(c => c.id === character.id);
    if (characterIsPresent) {
      return state.map(u => (u.id === character.id ? character : u));
    } else {
      return state.concat(character);
    }
  })
);
