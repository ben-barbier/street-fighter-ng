import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { CountryDTO } from '../../shared/models/country.models';

export const countriesActions = createActionGroup({
  source: 'Countries',
  events: {
    'get all': emptyProps(),
    'get all success': props<{ countries: CountryDTO[] }>(),
    'get all error': props<{ error: string }>(),

    get: props<{ id: string }>(),
    'get success': props<{ country: CountryDTO }>(),
    'get error': props<{ error: string }>(),

    update: props<{ country: CountryDTO }>(),
    'update success': props<{ country: CountryDTO }>(),
    'update error': props<{ error: string }>(),

    delete: props<{ country: CountryDTO }>(),
    'delete success': props<{ country: CountryDTO }>(),
    'delete error': props<{ error: string }>(),
  },
});
