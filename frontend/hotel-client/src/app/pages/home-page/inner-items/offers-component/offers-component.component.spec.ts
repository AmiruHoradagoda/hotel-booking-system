import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffersComponentComponent } from './offers-component.component';

describe('OffersComponentComponent', () => {
  let component: OffersComponentComponent;
  let fixture: ComponentFixture<OffersComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OffersComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OffersComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
