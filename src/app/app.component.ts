import { Component } from '@angular/core';
import { SecondComponentComponent } from './second-component/second-component';
import { ThirdComponentComponent } from './third-component/third-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SecondComponentComponent, ThirdComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'app';
}