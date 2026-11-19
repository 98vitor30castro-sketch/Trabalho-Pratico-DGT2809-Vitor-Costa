import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivros {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Use a Cabeça: Java',
      resumo: 'Use a Cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.',
      autores: ['Bert Bates', 'Kathy Sierra'],
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Java, como Programar',
      resumo: 'Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel',
      autores: ['Paul Deitel', 'Harvey Deitel'],
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Engenharia de Software',
      resumo: 'Cobre os princípios essenciais da engenharia de software, processos e arquitetura de sistemas.',
      autores: ['Ian Sommerville'],
    },
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorId =
      this.livros.length > 0 ? Math.max(...this.livros.map((l) => l.codigo)) : 0;
    livro.codigo = maiorId + 1;
    livro.codEditora = Number(livro.codEditora);
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const idx = this.livros.findIndex((l) => l.codigo === codigo);
    if (idx !== -1) {
      this.livros.splice(idx, 1);
    }
  }
}