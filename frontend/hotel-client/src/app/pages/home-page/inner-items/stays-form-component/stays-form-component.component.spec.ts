import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysFormComponentComponent } from './stays-form-component.component';

describe('StaysFormComponentComponent', () => {
  let component: StaysFormComponentComponent;
  let fixture: ComponentFixture<StaysFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysFormComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaysFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
