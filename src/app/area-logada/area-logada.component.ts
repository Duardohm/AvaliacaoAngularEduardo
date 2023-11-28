import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-area-logada',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './area-logada.component.html',
  styleUrl: './area-logada.component.css'
})
export class AreaLogadaComponent {
  @Input() email: string = '';
  autenticado: boolean = true;
}
