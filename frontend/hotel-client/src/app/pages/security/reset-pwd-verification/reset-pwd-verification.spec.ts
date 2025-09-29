import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwdVerification } from './reset-pwd-verification';

describe('ResetPwdVerification', () => {
  let component: ResetPwdVerification;
  let fixture: ComponentFixture<ResetPwdVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPwdVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPwdVerification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
