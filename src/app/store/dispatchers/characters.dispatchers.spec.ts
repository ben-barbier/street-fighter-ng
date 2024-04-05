import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { EntityState } from '../reducers';
import { CharactersDispatchers } from './characters.dispatchers';

describe('CharactersDispatchersService', () => {
  let service: CharactersDispatchers;

  const initialState: Partial<EntityState> = {
    characters: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    service = TestBed.inject(CharactersDispatchers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
