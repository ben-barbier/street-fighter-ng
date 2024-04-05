import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.models';

export const arenaActions = createActionGroup({
  source: 'Arena',
  events: {
    'add character': props<{ character: CharacterDTO }>(),
    'remove character': props<{ character: CharacterDTO }>(),

    fight: emptyProps(),
    'fight success': props<{ winner: CharacterDTO }>(),
    'fight error': props<{ error: string }>(),
  },
});
