import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Promocion1Component } from './promocion1.component';

describe('Promocion1Component', () => {
  let component: Promocion1Component;
  let fixture: ComponentFixture<Promocion1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Promocion1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Promocion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
