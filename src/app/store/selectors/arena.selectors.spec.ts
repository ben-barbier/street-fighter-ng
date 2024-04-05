import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { EntityState } from '../reducers';
import { ArenaSelectors } from './arena.selectors';

describe('ArenaService', () => {
  let service: ArenaSelectors;

  const initialState: Partial<EntityState> = {
    arena: {
      character1: null,
      character2: null,
      winner: null,
    },
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    service = TestBed.inject(ArenaSelectors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
