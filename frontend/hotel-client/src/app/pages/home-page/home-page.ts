import { Component } from '@angular/core';
import {MainHeader} from '../../components/main-header/main-header';
import {OptionsComponent} from './inner-items/options-component/options-component';
import {OffersComponent} from './inner-items/offers-component/offers-component';
import {HomeTrendingDestinations} from './inner-items/home-trending-destinations/home-trending-destinations';

@Component({
  selector: 'app-home-page',
  imports: [
    OptionsComponent,
    OffersComponent,
    HomeTrendingDestinations
  ],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss'
})
export class HomePage {

}
