import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewUsersOrdersComponent } from './new-users-orders.component';

describe('NewUsersOrdersComponent', () => {
  let component: NewUsersOrdersComponent;
  let fixture: ComponentFixture<NewUsersOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewUsersOrdersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewUsersOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
