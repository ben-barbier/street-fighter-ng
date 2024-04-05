import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { CharactersService } from '../../shared/services/characters.service';
import { charactersActions } from '../actions/characters.actions';

@Injectable()
export class CharactersEffects {
  private actions$ = inject(Actions);
  private charactersService = inject(CharactersService);

  getCharacters$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.getAll),
      switchMap(() =>
        this.charactersService.getAll().pipe(
          map(characters => charactersActions.getAllSuccess({ characters })),
          catchError(err => of(charactersActions.getAllError(err)))
        )
      )
    );
  });

  getCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.get),
      switchMap(action =>
        this.charactersService.get(action.id).pipe(
          map(character => charactersActions.getSuccess({ character })),
          catchError(err => of(charactersActions.getError(err)))
        )
      )
    );
  });

  updateCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.update),
      switchMap(action =>
        this.charactersService.update(action.character).pipe(
          map(() => charactersActions.updateSuccess({ character: action.character })),
          catchError(err => of(charactersActions.updateError(err)))
        )
      )
    );
  });

  deleteCharacter$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(charactersActions.delete),
      switchMap(action =>
        this.charactersService.delete(action.character).pipe(
          map(() => charactersActions.deleteSuccess({ character: action.character })),
          catchError(err => of(charactersActions.deleteError(err)))
        )
      )
    );
  });
}
