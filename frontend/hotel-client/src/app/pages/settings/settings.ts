import { Component } from '@angular/core';
import {MatTab, MatTabGroup} from '@angular/material/tabs';
import {ProfileSettings} from './inner/profile-settings/profile-settings';
import {History} from './inner/history/history';

@Component({
  selector: 'app-settings',
  imports: [
    MatTabGroup,
    MatTab,
    ProfileSettings,
    History
  ],
  templateUrl: './settings.html',
  styleUrl: './settings.scss'
})
export class Settings {

}
