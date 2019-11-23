import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoA1Component } from './segmento-a1.component';

describe('SegmentoA1Component', () => {
  let component: SegmentoA1Component;
  let fixture: ComponentFixture<SegmentoA1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoA1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoA1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
