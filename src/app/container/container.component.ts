import { Component } from '@angular/core';
import { MacchinaComponent } from '../macchina/macchina.component';

// @Component definisce metadati del componente (selettore, template, stile, dipendenze).
@Component({
  // Tag HTML con cui questo componente può essere usato in altri template.
  selector: 'app-container',
  // Import del componente figlio standalone usato nel template del container.
  imports: [MacchinaComponent],
  // Template esterno che descrive la vista del componente.
  templateUrl: './container.component.html',
  // Foglio di stile locale applicato solo a questo componente.
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  // Stato del componente: lista di nomi (string[]) da visualizzare nel template.
  // In pratica, e' la sorgente dati passata al componente figlio per il rendering.
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
