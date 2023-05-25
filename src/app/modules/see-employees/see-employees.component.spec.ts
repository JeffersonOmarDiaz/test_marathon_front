import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeEmployeesComponent } from './see-employees.component';

describe('SeeEmployeesComponent', () => {
  let component: SeeEmployeesComponent;
  let fixture: ComponentFixture<SeeEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
