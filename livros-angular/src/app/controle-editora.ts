import { Injectable } from '@angular/core';
import { Editora } from './editora';

@Injectable({
  providedIn: 'root',
})
export class ControleEditora {
  editoras: Array<Editora> = [
    { codEditora: 1, nome: 'Alta Books' },
    { codEditora: 2, nome: 'Pearson' },
    { codEditora: 3, nome: 'Addison Wesley' },
  ];

  getEditoras(): Array<Editora> {
    return this.editoras;
  }

  getNomeEditora(codEditora: number): string {
    const achou = this.editoras.filter((ed) => ed.codEditora === Number(codEditora));
    return achou.length > 0 ? achou[0].nome : '';
  }
}