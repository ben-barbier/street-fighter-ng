import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { EntityState } from '../reducers';
import { ArenaDispatchers } from './arena.dispatchers';

describe('ArenaService', () => {
  let service: ArenaDispatchers;

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
    service = TestBed.inject(ArenaDispatchers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
