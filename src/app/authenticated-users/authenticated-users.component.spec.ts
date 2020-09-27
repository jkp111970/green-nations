import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthenticatedUsersComponent } from './authenticated-users.component';

describe('AuthenticatedUsersComponent', () => {
  let component: AuthenticatedUsersComponent;
  let fixture: ComponentFixture<AuthenticatedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthenticatedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthenticatedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
