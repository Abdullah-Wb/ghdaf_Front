import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutProfileRestComponent } from './layout-profile-rest.component';

describe('LayoutProfileRestComponent', () => {
  let component: LayoutProfileRestComponent;
  let fixture: ComponentFixture<LayoutProfileRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutProfileRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutProfileRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
