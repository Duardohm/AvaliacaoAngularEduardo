import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-items',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './list-items.component.html',
  styleUrl: './list-items.component.css'
})
export class ListItemsComponent {
  itens: { text: string; completed: boolean }[] = [];

  novoItem: string = '';

  adicionarItem() {
    if (this.novoItem.trim() !== '') {
      this.itens.push({ text: this.novoItem, completed: false });
      this.novoItem = '';
    }
  }

  removerItem(index: number) {
    this.itens.splice(index, 1);
  }

  concluirTarefa(index: number) {
    this.itens[index].completed = !this.itens[index].completed;
  }
}
