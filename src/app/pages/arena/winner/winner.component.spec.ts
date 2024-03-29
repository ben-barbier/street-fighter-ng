import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerComponent } from './winner.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

describe('WinnerComponent', () => {
  let component: WinnerComponent;
  let fixture: ComponentFixture<WinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, WinnerComponent],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
    }).compileComponents();

    fixture = TestBed.createComponent(WinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
