import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditConstantsComponent } from './edit-constants.component';

describe('EditConstantsComponent', () => {
  let component: EditConstantsComponent;
  let fixture: ComponentFixture<EditConstantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditConstantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditConstantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
