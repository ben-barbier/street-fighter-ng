import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CharactersService } from '../../../shared/services/characters.service';

@Component({
  selector: 'app-winner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './winner.component.html',
  styleUrls: ['./winner.component.scss'],
})
export class WinnerComponent {
  private charactersService = inject(CharactersService);

  public winner = inject(MAT_DIALOG_DATA);
  public winnerPictureUrl = this.charactersService.getPictureUrl(this.winner);
}
