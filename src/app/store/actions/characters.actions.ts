import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.models';

export const charactersActions = createActionGroup({
  source: 'Characters',
  events: {
    'get all': emptyProps(),
    'get all success': props<{ characters: CharacterDTO[] }>(),
    'get all error': props<{ error: string }>(),

    get: props<{ id: string }>(),
    'get success': props<{ character: CharacterDTO }>(),
    'get error': props<{ error: string }>(),

    update: props<{ character: CharacterDTO }>(),
    'update success': props<{ character: CharacterDTO }>(),
    'update error': props<{ error: string }>(),

    delete: props<{ character: CharacterDTO }>(),
    'delete success': props<{ character: CharacterDTO }>(),
    'delete error': props<{ error: string }>(),
  },
});
