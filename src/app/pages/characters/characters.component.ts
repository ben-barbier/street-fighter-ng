import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterDTO } from '../../shared/models/character.models';
import { CharactersDispatchers } from '../../store/dispatchers/characters.dispatchers';
import { CharactersSelectors } from '../../store/selectors/characters.selectors';
import { CharacterCardComponent } from './character-card/character-card.component';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, RouterLinkWithHref],
})
export class CharactersComponent implements OnInit {
  private charactersDispatchers = inject(CharactersDispatchers);
  private charactersSelectors = inject(CharactersSelectors);

  public characters$: Observable<CharacterDTO[]> = this.charactersSelectors.characters$;

  ngOnInit(): void {
    this.charactersDispatchers.getAll();
  }

  public removeCharacterFromChampionship(characterToRemove: CharacterDTO) {
    this.charactersDispatchers.delete(characterToRemove);
  }
}
