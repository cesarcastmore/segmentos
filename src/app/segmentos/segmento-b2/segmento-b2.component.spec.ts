import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoB2Component } from './segmento-b2.component';

describe('SegmentoB2Component', () => {
  let component: SegmentoB2Component;
  let fixture: ComponentFixture<SegmentoB2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoB2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoB2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
