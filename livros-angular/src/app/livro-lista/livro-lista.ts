import { Component, OnInit } from '@angular/core';
import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-lista',
  standalone: false,
  templateUrl: './livro-lista.html',
  styleUrl: './livro-lista.css',
})
export class LivroLista implements OnInit {
  editoras: Array<Editora> = [];
  livros: Array<Livro> = [];

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    this.livros = this.servLivros.obterLivros();
  }

  excluir = (codigo: number): void => {
    this.servLivros.excluir(codigo);
    this.livros = this.servLivros.obterLivros();
  };

  obterNome = (codEditora: number): string => {
    return this.servEditora.getNomeEditora(codEditora);
  };
}