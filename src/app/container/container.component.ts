import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

@Component({
  selector: 'app-container',
  imports: [MacchinaComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  macchine: string[] = [
    'Ruspa',
    'Autocarro',
    'Gru',
    'Escavatore',
    'Betoniera',
    'Rullo compressore',
    'Caricatore',
    'Elevatore',
    'Trivella',
    'Dumper',
  ];
}
