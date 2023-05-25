import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CEnterpriseComponent } from './c-enterprise.component';

describe('CEnterpriseComponent', () => {
  let component: CEnterpriseComponent;
  let fixture: ComponentFixture<CEnterpriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CEnterpriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CEnterpriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
