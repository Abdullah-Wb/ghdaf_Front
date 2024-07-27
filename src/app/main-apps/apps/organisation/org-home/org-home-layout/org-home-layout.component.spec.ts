import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgHomeLayoutComponent } from './org-home-layout.component';

describe('OrgHomeLayoutComponent', () => {
  let component: OrgHomeLayoutComponent;
  let fixture: ComponentFixture<OrgHomeLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgHomeLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgHomeLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
