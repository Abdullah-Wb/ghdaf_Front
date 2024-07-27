import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgOrderLayoutComponent } from './org-order-layout.component';

describe('OrgOrderLayoutComponent', () => {
  let component: OrgOrderLayoutComponent;
  let fixture: ComponentFixture<OrgOrderLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgOrderLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgOrderLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
