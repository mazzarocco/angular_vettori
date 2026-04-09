import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';

@Component({
  selector: 'app-root',
  imports: [ContainerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
