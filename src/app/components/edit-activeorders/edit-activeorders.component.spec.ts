import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditActiveordersComponent } from './edit-activeorders.component';

describe('EditActiveordersComponent', () => {
  let component: EditActiveordersComponent;
  let fixture: ComponentFixture<EditActiveordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditActiveordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditActiveordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
