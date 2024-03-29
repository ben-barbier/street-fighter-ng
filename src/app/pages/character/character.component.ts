import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersService } from '../../shared/services/characters.service';
import { Character, CharacterDTO } from '../../shared/models/character.models';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class CharacterComponent implements OnInit {
  private charactersService = inject(CharactersService);
  private route = inject(ActivatedRoute);

  public character?: CharacterDTO;

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.charactersService.get(params['id']).subscribe(character => {
        this.character = character;
      });
    });
  }
}
