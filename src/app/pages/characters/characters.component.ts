import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../shared/services/characters.service';
import { Character, CharacterDTO } from '../../shared/models/character.models';
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
  public characters: CharacterDTO[] = [];

  ngOnInit(): void {
    this.charactersService.getAllWithCountry().subscribe((characters: CharacterDTO[]) => {
      this.characters = characters;
    });
  }

  public removeCharacterFromChampionship(characterToRemove: CharacterDTO) {
    this.characters = this.characters.filter((character: CharacterDTO) => character.id !== characterToRemove.id);
  }
}
