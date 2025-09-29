import { Component } from '@angular/core';

import { MatTab, MatTabGroup, MatTabLabel } from '@angular/material/tabs';
import { MatIcon } from '@angular/material/icon';
import { StaysContextComponentComponent } from "../stays-context-component/stays-context-component.component";

@Component({
  selector: 'app-options-component',
  imports: [MatTabGroup, MatTab, MatTabLabel, MatIcon, StaysContextComponentComponent],
  standalone: true,
  templateUrl: './options-component.component.html',
  styleUrl: './options-component.component.scss',
})
export class OptionsComponentComponent {}


