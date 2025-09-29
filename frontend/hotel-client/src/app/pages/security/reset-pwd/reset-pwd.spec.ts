import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResetPwd } from './reset-pwd';

describe('ResetPwd', () => {
  let component: ResetPwd;
  let fixture: ComponentFixture<ResetPwd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResetPwd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResetPwd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
