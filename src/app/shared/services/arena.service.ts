import { Injectable } from '@angular/core';
import { Character } from '../models/character.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArenaService {
  public character1 = new BehaviorSubject<Character | null>(null);
  public character2 = new BehaviorSubject<Character | null>(null);

  public addCharacterOnArena(character: Character): void {
    if (this.character1.getValue() === null) {
      this.character1.next(character);
      return;
    }
    if (this.character2.getValue() === null) {
      this.character2.next(character);
    }
  }
}
