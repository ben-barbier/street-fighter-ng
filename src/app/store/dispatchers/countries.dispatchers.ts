import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CountryDTO } from '../../shared/models/country.models';
import { countriesActions } from '../actions/countries.actions';

@Injectable({
  providedIn: 'root',
})
export class CountriesDispatchers {
  private store = inject(Store);

  public getAll(): void {
    this.store.dispatch(countriesActions.getAll());
  }

  public get(id: string): void {
    this.store.dispatch(countriesActions.get({ id }));
  }

  public delete(country: CountryDTO): void {
    this.store.dispatch(countriesActions.delete({ country }));
  }

  public update(country: CountryDTO): void {
    this.store.dispatch(countriesActions.update({ country }));
  }
}
