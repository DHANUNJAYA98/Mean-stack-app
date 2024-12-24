import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaBuilderComponent } from './pizza-builder.component';

describe('PizzaBuilderComponent', () => {
  let component: PizzaBuilderComponent;
  let fixture: ComponentFixture<PizzaBuilderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PizzaBuilderComponent]
    });
    fixture = TestBed.createComponent(PizzaBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
