import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSupportLayoutComponent } from './org-support-layout.component';

describe('OrgSupportLayoutComponent', () => {
  let component: OrgSupportLayoutComponent;
  let fixture: ComponentFixture<OrgSupportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgSupportLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSupportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
