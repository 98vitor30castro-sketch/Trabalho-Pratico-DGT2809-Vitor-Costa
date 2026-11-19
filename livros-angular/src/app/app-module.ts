import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { LivroLista } from './livro-lista/livro-lista';
import { LivroDados } from './livro-dados/livro-dados';
import { ControleEditora } from './controle-editora';
import { ControleLivros } from './controle-livros';

@NgModule({
  declarations: [App, LivroLista, LivroDados],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [ControleEditora, ControleLivros],
  bootstrap: [App],
})
export class AppModule {}