import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtphistoryComponent } from './otphistory.component';

describe('OtphistoryComponent', () => {
  let component: OtphistoryComponent;
  let fixture: ComponentFixture<OtphistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtphistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtphistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
