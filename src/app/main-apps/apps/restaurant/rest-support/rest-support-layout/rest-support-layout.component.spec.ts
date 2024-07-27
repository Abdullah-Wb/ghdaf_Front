import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestSupportLayoutComponent } from './rest-support-layout.component';

describe('RestSupportLayoutComponent', () => {
  let component: RestSupportLayoutComponent;
  let fixture: ComponentFixture<RestSupportLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestSupportLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RestSupportLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
