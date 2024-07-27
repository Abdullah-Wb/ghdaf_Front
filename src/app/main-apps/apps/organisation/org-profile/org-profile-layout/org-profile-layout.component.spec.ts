import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgProfileLayoutComponent } from './org-profile-layout.component';

describe('OrgProfileLayoutComponent', () => {
  let component: OrgProfileLayoutComponent;
  let fixture: ComponentFixture<OrgProfileLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgProfileLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgProfileLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
