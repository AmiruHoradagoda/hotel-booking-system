import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './main-header.component.html',
  styleUrl: './main-header.component.scss',
})
export class MainHeaderComponent {}
