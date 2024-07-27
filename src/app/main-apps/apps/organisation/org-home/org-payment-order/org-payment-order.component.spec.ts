import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgPaymentOrderComponent } from './org-payment-order.component';

describe('OrgPaymentOrderComponent', () => {
  let component: OrgPaymentOrderComponent;
  let fixture: ComponentFixture<OrgPaymentOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrgPaymentOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgPaymentOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
