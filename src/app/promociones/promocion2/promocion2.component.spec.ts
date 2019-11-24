import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Promocion2Component } from './promocion2.component';

describe('Promocion2Component', () => {
  let component: Promocion2Component;
  let fixture: ComponentFixture<Promocion2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Promocion2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Promocion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
