import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { filter, tap } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CharacterDTO } from '../../shared/models/character.models';
import { CharactersDispatchers } from '../../store/dispatchers/characters.dispatchers';
import { CharactersSelectors } from '../../store/selectors/characters.selectors';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CharacterComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private charactersDispatchers = inject(CharactersDispatchers);
  private charactersSelectors = inject(CharactersSelectors);

  public character?: CharacterDTO;
  public characterName = '';

  // 3 = On teste que RYU soit bien écrit

  ngOnInit(): void {
    this.route.params
      .pipe(
        map((params: Params): string => params['id']),
        tap(characterId => this.charactersDispatchers.get(characterId)),
        switchMap((characterId: string) =>
          this.charactersSelectors.character$(characterId).pipe(filter(character => !!character))
        )
      )
      .subscribe((character: CharacterDTO | undefined) => {
        this.characterName = character?.name.toUpperCase() ?? '';
        this.character = character;
      });
  }
}
