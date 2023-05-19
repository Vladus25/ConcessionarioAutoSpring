import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDaRiparareComponent } from './auto-da-riparare.component';

describe('AutoDaRiparareComponent', () => {
  let component: AutoDaRiparareComponent;
  let fixture: ComponentFixture<AutoDaRiparareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoDaRiparareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDaRiparareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
