import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEnterpriseComponent } from './e-enterprise.component';

describe('EEnterpriseComponent', () => {
  let component: EEnterpriseComponent;
  let fixture: ComponentFixture<EEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
