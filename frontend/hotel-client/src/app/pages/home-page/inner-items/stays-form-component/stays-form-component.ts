import {ChangeDetectionStrategy, Component} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {
  MatDatepickerModule,
  MatDatepickerToggle,
  MatDateRangeInput,
  MatDateRangePicker
} from '@angular/material/datepicker';
import {MatFormField, MatLabel, MatSuffix} from '@angular/material/input';
import {MatFormFieldModule, MatHint} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatMenu, MatMenuItem, MatMenuTrigger} from '@angular/material/menu';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-stays-form-component',
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatIcon,
    /*  MatFormField,
      MatLabel,
      MatDateRangeInput,
      MatHint,
      MatSuffix,
      MatDatepickerToggle,
      MatDateRangePicker,*/
    MatMenu,
    MatMenuTrigger,
    RouterLink
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stays-form-component.html',
  styleUrl: './stays-form-component.scss'
})
export class StaysFormComponent {

}
