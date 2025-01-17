import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalitylistComponent } from './localitylist.component';

describe('LocalitylistComponent', () => {
  let component: LocalitylistComponent;
  let fixture: ComponentFixture<LocalitylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalitylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalitylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
