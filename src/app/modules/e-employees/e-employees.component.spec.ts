import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEmployeesComponent } from './e-employees.component';

describe('EEmployeesComponent', () => {
  let component: EEmployeesComponent;
  let fixture: ComponentFixture<EEmployeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEmployeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
