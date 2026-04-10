import { Component } from '@angular/core';
import { ContainerComponent } from './container/container.component';

// Componente root dell'app: e' il punto di ingresso della UI Angular.
@Component({
  // Selettore usato in index.html per montare l'applicazione.
  selector: 'app-root',
  // Import del componente principale mostrato dalla root.
  imports: [ContainerComponent],
  // Template e stile associati al componente root.
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
