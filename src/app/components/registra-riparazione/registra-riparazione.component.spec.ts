import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistraRiparazioneComponent } from './registra-riparazione.component';

describe('RegistraRiparazioneComponent', () => {
  let component: RegistraRiparazioneComponent;
  let fixture: ComponentFixture<RegistraRiparazioneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistraRiparazioneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistraRiparazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
