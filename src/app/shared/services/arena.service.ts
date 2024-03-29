import { Injectable } from '@angular/core';
import { Character, CharacterDTO } from '../models/character.models';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArenaService {
  public character1 = new BehaviorSubject<CharacterDTO | null>(null);
  public character2 = new BehaviorSubject<CharacterDTO | null>(null);

  public addCharacterOnArena(character: CharacterDTO): void {
    if (this.character1.getValue() === null) {
      this.character1.next(character);
      return;
    }
    if (this.character2.getValue() === null) {
      this.character2.next(character);
    }
  }
}
