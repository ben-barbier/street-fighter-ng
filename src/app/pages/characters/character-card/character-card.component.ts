import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { Character, CharacterDTO } from '../../../shared/models/character.models';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterLinkWithHref } from '@angular/router';
import { ArenaService } from '../../../shared/services/arena.service';
import { CharactersService } from '../../../shared/services/characters.service';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterLinkWithHref],
})
export class CharacterCardComponent implements OnInit {
  @Input() public character!: CharacterDTO;
  @Output() private removed = new EventEmitter<CharacterDTO>();

  public pictureUrl?: string;

  private arenaService = inject(ArenaService);
  private charactersService = inject(CharactersService);

  public ngOnInit(): void {
    this.pictureUrl = this.charactersService.getPictureUrl(this.character);
  }
  public removeCharacter(): void {
    this.removed.emit(this.character);
  }

  public addOnArena(): void {
    this.arenaService.addCharacterOnArena(this.character);
  }
}
