import { createReducer, on } from '@ngrx/store';
import { ArenaState } from '../../shared/models/arena.models';
import { arenaActions } from '../actions/arena.actions';

const initialState: ArenaState = {
  character1: null,
  character2: null,
  winner: null,
};

export const arenaReducer = createReducer(
  initialState,
  on(arenaActions.addCharacter, (state, { character }) => {
    if (state.character1 === null) {
      return { ...state, character1: character.id };
    }
    if (state.character2 === null) {
      return { ...state, character2: character.id };
    }
    return state;
  }),
  on(arenaActions.removeCharacter, (state, { character }) => {
    return {
      ...state,
      character1: state.character1 === character.id ? null : state.character1,
      character2: state.character2 === character.id ? null : state.character2,
    };
  }),
  on(arenaActions.fightSuccess, (state, { winner }) => ({ character1: null, character2: null, winner: winner.id }))
);
