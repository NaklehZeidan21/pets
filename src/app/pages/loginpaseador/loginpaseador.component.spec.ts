import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginpaseadorComponent } from './loginpaseador.component';

describe('LoginpaseadorComponent', () => {
  let component: LoginpaseadorComponent;
  let fixture: ComponentFixture<LoginpaseadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginpaseadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginpaseadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
