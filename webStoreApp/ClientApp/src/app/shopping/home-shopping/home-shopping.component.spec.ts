import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeShoppingComponent } from './home-shopping.component';

describe('HomeShoppingComponent', () => {
  let component: HomeShoppingComponent;
  let fixture: ComponentFixture<HomeShoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeShoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
