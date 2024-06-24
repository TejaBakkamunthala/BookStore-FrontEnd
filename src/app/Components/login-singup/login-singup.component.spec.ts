import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSingupComponent } from './login-singup.component';

describe('LoginSingupComponent', () => {
  let component: LoginSingupComponent;
  let fixture: ComponentFixture<LoginSingupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginSingupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginSingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
