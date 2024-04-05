import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { CharacterDTO } from '../../shared/models/character.models';
import { CharactersDispatchers } from '../../store/dispatchers/characters.dispatchers';
import { CharactersSelectors } from '../../store/selectors/characters.selectors';
import { CharactersComponent } from './characters.component';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersComponent],
      providers: [
        { provide: CharactersSelectors, useValue: { characters$: of([]) } },
        { provide: CharactersDispatchers, useValue: { getAll: jest.fn(), delete: jest.fn() } },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call charactersDispatchers.getAll', () => {
      // Given
      const charactersDispatchers = TestBed.inject(CharactersDispatchers);
      // When
      component.ngOnInit();
      // Then
      expect(charactersDispatchers.getAll).toHaveBeenCalled();
    });
  });

  describe('removeCharacterFromChampionship', () => {
    it('should call charactersDispatchers.delete with the character to remove', () => {
      // Given
      const characterToRemove: CharacterDTO = { id: '1', name: 'Ryu' } as CharacterDTO;
      const charactersDispatchers = TestBed.inject(CharactersDispatchers);
      // When
      component.removeCharacterFromChampionship(characterToRemove);
      // Then
      expect(charactersDispatchers.delete).toHaveBeenCalledWith(characterToRemove);
    });
  });
});
