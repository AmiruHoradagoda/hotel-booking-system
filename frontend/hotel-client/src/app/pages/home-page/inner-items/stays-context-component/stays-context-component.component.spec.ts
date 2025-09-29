import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysContextComponentComponent } from './stays-context-component.component';

describe('StaysContextComponentComponent', () => {
  let component: StaysContextComponentComponent;
  let fixture: ComponentFixture<StaysContextComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaysContextComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StaysContextComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
