import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutHomeRestComponent } from './layout-home-rest.component';

describe('LayoutHomeRestComponent', () => {
  let component: LayoutHomeRestComponent;
  let fixture: ComponentFixture<LayoutHomeRestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutHomeRestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutHomeRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
