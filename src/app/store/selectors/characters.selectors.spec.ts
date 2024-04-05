import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { EntityState } from '../reducers';
import { CharactersSelectors } from './characters.selectors';

describe('CharactersSelectorsTsService', () => {
  let service: CharactersSelectors;

  const initialState: Partial<EntityState> = {
    characters: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    service = TestBed.inject(CharactersSelectors);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('characters$', () => {
    it('should return an observable of characters', done => {
      service.characters$.subscribe(characters => {
        expect(characters).toEqual([]);
        done();
      });
    });
  });
});
