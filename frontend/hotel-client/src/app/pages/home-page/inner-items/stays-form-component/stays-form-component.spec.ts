import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysFormComponent } from './stays-form-component';

describe('StaysFormComponent', () => {
  let component: StaysFormComponent;
  let fixture: ComponentFixture<StaysFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaysFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
