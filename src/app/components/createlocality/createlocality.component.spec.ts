import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatelocalityComponent } from './createlocality.component';

describe('CreatelocalityComponent', () => {
  let component: CreatelocalityComponent;
  let fixture: ComponentFixture<CreatelocalityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatelocalityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatelocalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
