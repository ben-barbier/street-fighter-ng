import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CountriesService } from '../../shared/services/countries.service';
import { countriesActions } from '../actions/countries.actions';

@Injectable()
export class CountriesEffects {
  private actions$ = inject(Actions);
  private countriesService = inject(CountriesService);

  getCountries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countriesActions.getAll),
      switchMap(() =>
        this.countriesService.getAll().pipe(
          map(countries => countriesActions.getAllSuccess({ countries })),
          catchError(err => of(countriesActions.getAllError(err)))
        )
      )
    );
  });

  getCountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countriesActions.get),
      switchMap(action =>
        this.countriesService.get(action.id).pipe(
          map(country => countriesActions.getSuccess({ country })),
          catchError(err => of(countriesActions.getError(err)))
        )
      )
    );
  });

  updateCountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countriesActions.update),
      switchMap(action =>
        this.countriesService.update(action.country).pipe(
          map(() => countriesActions.updateSuccess({ country: action.country })),
          catchError(err => of(countriesActions.updateError(err)))
        )
      )
    );
  });

  deleteCountry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(countriesActions.delete),
      switchMap(action =>
        this.countriesService.delete(action.country).pipe(
          map(() => countriesActions.deleteSuccess({ country: action.country })),
          catchError(err => of(countriesActions.deleteError(err)))
        )
      )
    );
  });
}
