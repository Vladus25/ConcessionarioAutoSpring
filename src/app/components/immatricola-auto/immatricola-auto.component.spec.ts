import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImmatricolaAutoComponent } from './immatricola-auto.component';

describe('ImmatricolaAutoComponent', () => {
  let component: ImmatricolaAutoComponent;
  let fixture: ComponentFixture<ImmatricolaAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImmatricolaAutoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImmatricolaAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
