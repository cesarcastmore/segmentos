import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompactoComponent } from './compacto.component';

describe('CompactoComponent', () => {
  let component: CompactoComponent;
  let fixture: ComponentFixture<CompactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
