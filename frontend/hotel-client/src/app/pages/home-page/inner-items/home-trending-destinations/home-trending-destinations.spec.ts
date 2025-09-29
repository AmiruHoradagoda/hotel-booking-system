import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTrendingDestinations } from './home-trending-destinations';

describe('HomeTrendingDestinations', () => {
  let component: HomeTrendingDestinations;
  let fixture: ComponentFixture<HomeTrendingDestinations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTrendingDestinations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTrendingDestinations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
