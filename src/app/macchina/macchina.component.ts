import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [],
  templateUrl: './macchina.component.html',
  styleUrl: './macchina.component.css',
})
export class MacchinaComponent {
  @Input() nomeMacchina = '';

  pezzi: string[] = ['bulloni', 'viti', 'ferro'];
}
