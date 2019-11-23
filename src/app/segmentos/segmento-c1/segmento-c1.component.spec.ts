import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoC1Component } from './segmento-c1.component';

describe('SegmentoC1Component', () => {
  let component: SegmentoC1Component;
  let fixture: ComponentFixture<SegmentoC1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoC1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoC1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
