import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { UntilDestroy } from '@ngneat/until-destroy';
import { map } from 'rxjs/operators';
import { ArenaDispatchers } from '../../store/dispatchers/arena.dispatchers';
import { ArenaSelectors } from '../../store/selectors/arena.selectors';

@UntilDestroy()
@Component({
  selector: 'app-arena',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './arena.component.html',
  styleUrls: ['./arena.component.scss'],
})
export class ArenaComponent {
  private arenaDispatchers = inject(ArenaDispatchers);
  private arenaSelectors = inject(ArenaSelectors);
  public fighter1$ = this.arenaSelectors.fighters$.pipe(map(fighters => fighters[0]));
  public fighter2$ = this.arenaSelectors.fighters$.pipe(map(fighters => fighters[1]));
  public isArenaFull$ = this.arenaSelectors.isArenaFull$;

  public fight(): void {
    this.arenaDispatchers.fight();
  }
}
