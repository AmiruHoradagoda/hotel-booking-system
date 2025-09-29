import { Component } from '@angular/core';
import {MatTab, MatTabGroup, MatTabLabel} from '@angular/material/tabs';
import {MatIcon} from '@angular/material/icon';
import {StaysContextComponent} from '../stays-context-component/stays-context-component';

@Component({
  selector: 'app-options-component',
  imports: [
    MatTabGroup,
    MatTab,
    MatTabLabel,
    MatIcon,
    StaysContextComponent
  ],
  templateUrl: './options-component.html',
  styleUrl: './options-component.scss'
})
export class OptionsComponent {

}
