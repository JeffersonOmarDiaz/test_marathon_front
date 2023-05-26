import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDepartmentComponent } from './c-department.component';

describe('CDepartmentComponent', () => {
  let component: CDepartmentComponent;
  let fixture: ComponentFixture<CDepartmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CDepartmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
