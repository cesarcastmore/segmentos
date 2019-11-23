import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentoA2Component } from './segmento-a2.component';

describe('SegmentoA2Component', () => {
  let component: SegmentoA2Component;
  let fixture: ComponentFixture<SegmentoA2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentoA2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentoA2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
