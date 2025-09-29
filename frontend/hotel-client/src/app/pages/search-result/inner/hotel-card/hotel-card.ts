import {Component, inject} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip, TooltipPosition} from '@angular/material/tooltip';
import {FormControl} from '@angular/forms';
import {MatButton} from '@angular/material/button';
import {MatDialog} from '@angular/material/dialog';
import {HotelMapView} from '../hotel-map-view/hotel-map-view';

@Component({
  selector: 'app-hotel-card',
  imports: [
    MatIcon,
    MatTooltip,
    MatButton
  ],
  templateUrl: './hotel-card.html',
  styleUrl: './hotel-card.scss'
})
export class HotelCard {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  dialog = inject(MatDialog);

  openModal() {
    this.dialog.open(HotelMapView,{
      width:'1000px',
      data:{},
      disableClose:true
    })
  }
}
