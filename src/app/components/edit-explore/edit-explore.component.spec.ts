import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExploreComponent } from './edit-explore.component';

describe('EditExploreComponent', () => {
  let component: EditExploreComponent;
  let fixture: ComponentFixture<EditExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
