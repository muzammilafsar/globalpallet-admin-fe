import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepComponent } from './createp.component';

describe('CreatepComponent', () => {
  let component: CreatepComponent;
  let fixture: ComponentFixture<CreatepComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
