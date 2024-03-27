import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
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
