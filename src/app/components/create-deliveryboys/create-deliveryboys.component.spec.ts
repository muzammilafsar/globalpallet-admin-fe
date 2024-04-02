import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDeliveryboysComponent } from './create-deliveryboys.component';

describe('CreateDeliveryboysComponent', () => {
  let component: CreateDeliveryboysComponent;
  let fixture: ComponentFixture<CreateDeliveryboysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateDeliveryboysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDeliveryboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
