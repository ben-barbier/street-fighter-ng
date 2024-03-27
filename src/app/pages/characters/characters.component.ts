import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { Character } from '../../shared/models/character.model';
import { CommonModule } from '@angular/common';
import { CharacterCardComponent } from './character-card/character-card.component';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
  standalone: true,
  imports: [CommonModule, CharacterCardComponent, RouterLinkWithHref],
})
export class CharactersComponent implements OnInit {
  private charactersService = inject(CharactersService);
  public characters: Character[] = [];

  ngOnInit(): void {
    this.charactersService.getAll().subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

  public removeCharacterFromChampionship(characterToRemove: Character) {
    this.characters = this.characters.filter((character: Character) => character.id !== characterToRemove.id);
  }
}
