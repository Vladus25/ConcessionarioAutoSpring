import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoUsataComponent } from './auto-usata.component';

describe('AutoUsataComponent', () => {
  let component: AutoUsataComponent;
  let fixture: ComponentFixture<AutoUsataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutoUsataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoUsataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
