import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarUrlComponent } from './nav-bar-url.component';

describe('NavBarUrlComponent', () => {
  let component: NavBarUrlComponent;
  let fixture: ComponentFixture<NavBarUrlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarUrlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarUrlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
