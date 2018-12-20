import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddObjectToListComponent } from './add-object-to-list.component';

describe('AddObjectToListComponent', () => {
  let component: AddObjectToListComponent;
  let fixture: ComponentFixture<AddObjectToListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddObjectToListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddObjectToListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
