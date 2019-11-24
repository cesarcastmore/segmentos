import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeportivoComponent } from './deportivo.component';

describe('DeportivoComponent', () => {
  let component: DeportivoComponent;
  let fixture: ComponentFixture<DeportivoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeportivoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeportivoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
