import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayObjectListComponent } from './display-object-list.component';

describe('DisplayObjectListComponent', () => {
  let component: DisplayObjectListComponent;
  let fixture: ComponentFixture<DisplayObjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayObjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayObjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
