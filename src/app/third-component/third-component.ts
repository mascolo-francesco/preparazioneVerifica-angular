import { Component } from '@angular/core';
import { FourthComponentComponent } from '../fourth-component/fourth-component';

@Component({
  selector: 'app-third-component',
  standalone: true,
  imports: [FourthComponentComponent],
  templateUrl: './third-component.html',
  styleUrl: './third-component.css'
})
export class ThirdComponentComponent {
  name = 'terzo';
}