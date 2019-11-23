import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoB1Component } from './segmento-b1.component';

describe('SegmentoB1Component', () => {
  let component: SegmentoB1Component;
  let fixture: ComponentFixture<SegmentoB1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoB1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoB1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
