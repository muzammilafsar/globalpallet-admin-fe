import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoysDataComponent } from './boys-data.component';

describe('BoysDataComponent', () => {
  let component: BoysDataComponent;
  let fixture: ComponentFixture<BoysDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoysDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoysDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
