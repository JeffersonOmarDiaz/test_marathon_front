import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EDepartmentComponent } from './e-department.component';

describe('EDepartmentComponent', () => {
  let component: EDepartmentComponent;
  let fixture: ComponentFixture<EDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
