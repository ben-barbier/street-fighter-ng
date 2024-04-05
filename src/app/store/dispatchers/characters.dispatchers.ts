import { inject, Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { CharacterDTO } from '../../shared/models/character.models';
import { charactersActions } from '../actions/characters.actions';

@Injectable({
  providedIn: 'root',
})
export class CharactersDispatchers {
  private store = inject(Store);

  public getAll(): void {
    this.store.dispatch(charactersActions.getAll());
  }

  public get(id: string): void {
    this.store.dispatch(charactersActions.get({ id }));
  }

  public delete(character: CharacterDTO): void {
    this.store.dispatch(charactersActions.delete({ character }));
  }

  public update(character: CharacterDTO): void {
    this.store.dispatch(charactersActions.update({ character }));
  }
}
