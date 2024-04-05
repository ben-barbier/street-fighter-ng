import { createReducer, on } from '@ngrx/store';
import { CountryDTO } from '../../shared/models/country.models';
import { countriesActions } from '../actions/countries.actions';

const initialState: CountryDTO[] = [];

export const countriesReducer = createReducer(
  initialState,
  on(countriesActions.getAllSuccess, (state, { countries }) => countries),
  on(countriesActions.updateSuccess, (state, { country }) => state.map(u => (u.name === country.name ? country : u))),
  on(countriesActions.deleteSuccess, (state, { country }) => state.filter(u => u.name !== country.name)),
  on(countriesActions.getSuccess, (state, { country }) => {
    const countryIsPresent = state.some(c => c.name === country.name);
    if (countryIsPresent) {
      return state.map(u => (u.name === country.name ? country : u));
    } else {
      return state.concat(country);
    }
  })
);
