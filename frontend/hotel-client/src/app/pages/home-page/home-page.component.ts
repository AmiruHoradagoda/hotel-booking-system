import { Component } from '@angular/core';
import { MainHeaderComponent } from './inner-items/main-header/main-header.component';
import { OptionsComponentComponent } from './inner-items/options-component/options-component.component';
import { OffersComponentComponent } from './inner-items/offers-component/offers-component.component';
import { TrendingDestinationsComponent } from './inner-items/trending-destinations/trending-destinations.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainHeaderComponent,
    OptionsComponentComponent,
    OffersComponentComponent,
    TrendingDestinationsComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
