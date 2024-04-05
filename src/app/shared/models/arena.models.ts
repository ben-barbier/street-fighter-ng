import { CharacterDTO } from './character.models';

export interface Arena {
  character1: CharacterDTO;
  character2: CharacterDTO;
  winner: CharacterDTO;
}

export interface ArenaState {
  character1: string | null; // character ID
  character2: string | null; // character ID
  winner: string | null; // character ID
}
