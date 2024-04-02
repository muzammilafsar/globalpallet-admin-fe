import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserdeletedaddressComponent } from './userdeletedaddress.component';

describe('UserdeletedaddressComponent', () => {
  let component: UserdeletedaddressComponent;
  let fixture: ComponentFixture<UserdeletedaddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserdeletedaddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserdeletedaddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
