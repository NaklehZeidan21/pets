import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontImgComponent } from './font-img.component';

describe('FontImgComponent', () => {
  let component: FontImgComponent;
  let fixture: ComponentFixture<FontImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FontImgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
