import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterVerification } from './register-verification';

describe('RegisterVerification', () => {
  let component: RegisterVerification;
  let fixture: ComponentFixture<RegisterVerification>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterVerification]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterVerification);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
