import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgViewOrderComponent } from './org-view-order.component';

describe('OrgViewOrderComponent', () => {
  let component: OrgViewOrderComponent;
  let fixture: ComponentFixture<OrgViewOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgViewOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgViewOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
