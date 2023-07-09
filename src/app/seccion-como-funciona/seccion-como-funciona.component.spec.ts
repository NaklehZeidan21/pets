import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionComoFuncionaComponent } from './seccion-como-funciona.component';

describe('SeccionComoFuncionaComponent', () => {
  let component: SeccionComoFuncionaComponent;
  let fixture: ComponentFixture<SeccionComoFuncionaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionComoFuncionaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionComoFuncionaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
