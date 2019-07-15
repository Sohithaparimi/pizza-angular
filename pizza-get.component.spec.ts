import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGetComponent } from './pizza-get.component';

describe('PizzaGetComponent', () => {
  let component: PizzaGetComponent;
  let fixture: ComponentFixture<PizzaGetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaGetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
