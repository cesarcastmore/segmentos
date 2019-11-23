import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoC2Component } from './segmento-c2.component';

describe('SegmentoC2Component', () => {
  let component: SegmentoC2Component;
  let fixture: ComponentFixture<SegmentoC2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoC2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoC2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
