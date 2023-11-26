import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AreaLogadaComponent } from "../area-logada/area-logada.component";

@Component({
    selector: 'app-form-login',
    standalone: true,
    templateUrl: './form-login.component.html',
    styleUrl: './form-login.component.css',
    imports: [CommonModule, FormsModule, AreaLogadaComponent]
})
export class FormLoginComponent {
  email: string = '';
  senha: string = '';
  autenticado: boolean = false;

  fazerLogin() {
    if (this.email === 'e' && this.senha === 'e') {
      this.autenticado = true;
      
    } else {
      alert('Usuário ou senha incorretos');
    }
  }
  
}
