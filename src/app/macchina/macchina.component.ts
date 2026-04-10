import { Component, Input } from '@angular/core';

// Componente presentazionale: mostra una macchina e i relativi pezzi disponibili.
@Component({
  // Selettore usato dal componente container nel suo template.
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css',
})
export class MacchinaComponent {
  // Input dal parent: nome della macchina da visualizzare nel titolo della card.
  @Input() nomeMacchina = '';

  // Dati locali del componente mostrati in elenco nel template.
  pezzi: string[] = ['bulloni', 'viti', 'ferro'];
}
