import { TestBed } from '@angular/core/testing';

import { provideMockStore } from '@ngrx/store/testing';
import { EntityState } from '../reducers';
import { CountriesDispatchers } from './countries.dispatchers';

describe('CoutriesDispatchersService', () => {
  let service: CountriesDispatchers;

  const initialState: Partial<EntityState> = {
    countries: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore({ initialState })],
    });
    service = TestBed.inject(CountriesDispatchers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
