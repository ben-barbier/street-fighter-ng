import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterLinkWithHref } from '@angular/router';
import { Observable } from 'rxjs';
import { CharacterDTO } from '../../../shared/models/character.models';
import { CharactersService } from '../../../shared/services/characters.service';
import { ArenaDispatchers } from '../../../store/dispatchers/arena.dispatchers';
import { ArenaSelectors } from '../../../store/selectors/arena.selectors';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterLinkWithHref],
})
export class CharacterCardComponent implements OnInit {
  private arenaDispatchers = inject(ArenaDispatchers);
  private arenaSelectors = inject(ArenaSelectors);
  private charactersService = inject(CharactersService);

  @Input() public character!: CharacterDTO;
  @Output() private removed = new EventEmitter<CharacterDTO>();

  public pictureUrl?: string;
  public isInArena$?: Observable<boolean>;

  public ngOnInit(): void {
    this.pictureUrl = this.charactersService.getPictureUrl(this.character);
    this.isInArena$ = this.arenaSelectors.isInArena$(this.character);
  }
  public removeCharacter(): void {
    this.removed.emit(this.character);
  }

  public addOnArena(): void {
    this.arenaDispatchers.addFighter(this.character);
  }
}
