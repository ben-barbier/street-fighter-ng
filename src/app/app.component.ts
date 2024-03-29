import { Component, inject } from '@angular/core';
import { from, tap } from 'rxjs';
import { CountriesService } from './shared/services/countries.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private c = inject(CountriesService);

  constructor() {
    this.c.get('France').subscribe();
  }
}
