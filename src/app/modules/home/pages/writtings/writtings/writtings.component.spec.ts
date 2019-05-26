import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WrittingsComponent } from './writtings.component';

describe('WrittingsComponent', () => {
  let component: WrittingsComponent;
  let fixture: ComponentFixture<WrittingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WrittingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WrittingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
