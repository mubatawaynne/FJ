import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestqoteComponent } from './requestqote.component';

describe('RequestqoteComponent', () => {
  let component: RequestqoteComponent;
  let fixture: ComponentFixture<RequestqoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestqoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestqoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
