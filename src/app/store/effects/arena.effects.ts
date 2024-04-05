import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, tap, withLatestFrom } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { WinnerComponent } from '../../pages/arena/winner/winner.component';
import { CharacterDTO } from '../../shared/models/character.models';
import { CharactersService } from '../../shared/services/characters.service';
import { arenaActions } from '../actions/arena.actions';
import { ArenaSelectors } from '../selectors/arena.selectors';

@Injectable()
export class ArenaEffects {
  private actions$ = inject(Actions);
  private charactersService = inject(CharactersService);
  private arenaSelectors = inject(ArenaSelectors);
  private dialog = inject(MatDialog);

  fight$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(arenaActions.fight),
      withLatestFrom(this.arenaSelectors.fighters$),
      map(e => e[1] as CharacterDTO[]),
      switchMap((fighters: CharacterDTO[]) => {
        return this.charactersService.fight(fighters[0], fighters[1]).pipe(
          map(winner => arenaActions.fightSuccess({ winner })),
          catchError(err => of(arenaActions.fightError(err)))
        );
      })
    );
  });

  displayWinner$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(arenaActions.fightSuccess),
        tap(({ winner }) => this.dialog.open(WinnerComponent, { data: winner }))
      );
    },
    { dispatch: false }
  );
}
