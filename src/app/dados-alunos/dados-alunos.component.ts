import { Component, OnInit  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dados-alunos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dados-alunos.component.html',
  styleUrl: './dados-alunos.component.css'
})
export class DadosAlunosComponent implements OnInit {
  alunos: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.obterDadosAlunos();
  }

  obterDadosAlunos() {
    this.http.get<any[]>('http://localhost:3000/alunos')
      .subscribe(data => {
        this.alunos = data;
      });
  }

  calcularMediaGlobal(rendimento: any): number {
    const disciplinas = Object.values(rendimento);
    const somaNotas: any = disciplinas.reduce((total: any, nota) => total + nota, 0);
    return somaNotas / disciplinas.length;
  }

}
