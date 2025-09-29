import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsComponentComponent } from './options-component.component';

describe('OptionsComponentComponent', () => {
  let component: OptionsComponentComponent;
  let fixture: ComponentFixture<OptionsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OptionsComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OptionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
