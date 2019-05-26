import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWrittingComponent } from './add-writting.component';

describe('AddWrittingComponent', () => {
  let component: AddWrittingComponent;
  let fixture: ComponentFixture<AddWrittingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWrittingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWrittingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
