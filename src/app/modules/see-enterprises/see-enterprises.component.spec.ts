import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeEnterprisesComponent } from './see-enterprises.component';

describe('SeeEnterprisesComponent', () => {
  let component: SeeEnterprisesComponent;
  let fixture: ComponentFixture<SeeEnterprisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeEnterprisesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeeEnterprisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
