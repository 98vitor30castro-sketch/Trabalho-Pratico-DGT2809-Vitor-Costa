import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ControleEditora } from '../controle-editora';
import { ControleLivros } from '../controle-livros';
import { Editora } from '../editora';
import { Livro } from '../livro';

@Component({
  selector: 'app-livro-dados',
  standalone: false,
  templateUrl: './livro-dados.html',
  styleUrl: './livro-dados.css',
})
export class LivroDados implements OnInit {
  livro: Livro = new Livro();
  autoresForm = '';
  editoras: Array<Editora> = [];

  constructor(
    private servEditora: ControleEditora,
    private servLivros: ControleLivros,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editoras = this.servEditora.getEditoras();
    if (this.editoras.length > 0) {
      this.livro.codEditora = this.editoras[0].codEditora;
    }
  }

  incluir = (): void => {
    this.livro.autores = this.autoresForm
      .split('\n')
      .map((a) => a.trim())
      .filter((a) => a.length > 0);

    this.servLivros.incluir(this.livro);
    this.router.navigateByUrl('/lista');
  };
}