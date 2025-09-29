import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'app-stays-form-component',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatDatepickerModule,
    MatIcon,
    MatMenu,
    MatMenuTrigger,
  ],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './stays-form-component.component.html',
  styleUrl: './stays-form-component.component.scss',
})
export class StaysFormComponentComponent {}
