import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponenteFilhoComponent } from "../componente-filho/componente-filho.component";

@Component({
    selector: 'app-componente-pai',
    standalone: true,
    templateUrl: './componente-pai.component.html',
    styleUrl: './componente-pai.component.css',
    imports: [CommonModule, ComponenteFilhoComponent]
})
export class ComponentePaiComponent {
  listaItens: string[] = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6'];
}
