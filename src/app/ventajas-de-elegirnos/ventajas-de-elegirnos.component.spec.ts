import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentajasDeElegirnosComponent } from './ventajas-de-elegirnos.component';

describe('VentajasDeElegirnosComponent', () => {
  let component: VentajasDeElegirnosComponent;
  let fixture: ComponentFixture<VentajasDeElegirnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VentajasDeElegirnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VentajasDeElegirnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
