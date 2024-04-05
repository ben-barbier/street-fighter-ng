import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.models';
import { arenaActions } from '../actions/arena.actions';

@Injectable({
  providedIn: 'root',
})
export class ArenaDispatchers {
  private store = inject(Store);

  public addFighter(fighter: CharacterDTO): void {
    this.store.dispatch(arenaActions.addCharacter({ character: fighter }));
  }

  public fight(): void {
    this.store.dispatch(arenaActions.fight());
  }
}
