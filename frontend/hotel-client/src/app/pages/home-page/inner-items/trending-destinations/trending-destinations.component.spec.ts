import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingDestinationsComponent } from './trending-destinations.component';

describe('TrendingDestinationsComponent', () => {
  let component: TrendingDestinationsComponent;
  let fixture: ComponentFixture<TrendingDestinationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrendingDestinationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrendingDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
