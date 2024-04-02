import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDeliveryboysComponent } from './edit-deliveryboys.component';

describe('EditDeliveryboysComponent', () => {
  let component: EditDeliveryboysComponent;
  let fixture: ComponentFixture<EditDeliveryboysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDeliveryboysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDeliveryboysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
