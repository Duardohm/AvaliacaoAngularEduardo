import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from "./contador/contador.component";
import { ListItemsComponent } from "./list-items/list-items.component";
import { FormCadastroComponent } from "./form-cadastro/form-cadastro.component";
import { ControleAcessoComponent } from "./controle-acesso/controle-acesso.component";
import { ComponentePaiComponent } from "./componente-pai/componente-pai.component";
import { FormLoginComponent } from "./form-login/form-login.component";
import { AreaLogadaComponent } from "./area-logada/area-logada.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ContadorComponent, ListItemsComponent, FormCadastroComponent, ControleAcessoComponent, ComponentePaiComponent, FormLoginComponent, AreaLogadaComponent]
})
export class AppComponent {
  title = 'AvaliacaoAngularEduardo';
  email: string = '';  
}
