import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Promocion3Component } from './promocion3.component';

describe('Promocion3Component', () => {
  let component: Promocion3Component;
  let fixture: ComponentFixture<Promocion3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Promocion3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Promocion3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
