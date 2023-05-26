import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeDepartmentsComponent } from './see-departments.component';

describe('SeeDepartmentsComponent', () => {
  let component: SeeDepartmentsComponent;
  let fixture: ComponentFixture<SeeDepartmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeDepartmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeDepartmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
