import { Component } from '@angular/core';
import { StaysFormComponentComponent } from "../stays-form-component/stays-form-component.component";

@Component({
  selector: 'app-stays-context-component',
  standalone: true,
  imports: [StaysFormComponentComponent],
  templateUrl: './stays-context-component.component.html',
  styleUrl: './stays-context-component.component.scss'
})
export class StaysContextComponentComponent {

}
