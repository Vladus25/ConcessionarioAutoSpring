import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoConOpzioniComponent } from './auto-con-opzioni.component';

describe('AutoConOpzioniComponent', () => {
  let component: AutoConOpzioniComponent;
  let fixture: ComponentFixture<AutoConOpzioniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoConOpzioniComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoConOpzioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
