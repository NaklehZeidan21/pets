import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterpaseadorComponent } from './registerpaseador.component';

describe('RegisterpaseadorComponent', () => {
  let component: RegisterpaseadorComponent;
  let fixture: ComponentFixture<RegisterpaseadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterpaseadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterpaseadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
