import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingCartBoxComponent } from './shopping-cart-box.component';

describe('ShoppingCartBoxComponent', () => {
  let component: ShoppingCartBoxComponent;
  let fixture: ComponentFixture<ShoppingCartBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoppingCartBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingCartBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
