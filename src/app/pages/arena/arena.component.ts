import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArenaService } from '../../shared/services/arena.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CharactersService } from '../../shared/services/characters.service';
import { Character } from '../../shared/models/character.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { WinnerComponent } from './winner/winner.component';

@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
})
export class ArenaComponent {
  public arenaService = inject(ArenaService);
  private charactersService = inject(CharactersService);
  private dialog = inject(MatDialog);

  public fight(): void {
    this.charactersService
      .fight(this.arenaService.character1.getValue() as Character, this.arenaService.character2.getValue() as Character)
      .subscribe(winner => {
        this.dialog.open(WinnerComponent, { data: winner });
      });
  }
}
