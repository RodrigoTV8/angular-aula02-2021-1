import { Component } from '@angular/core';
import { Colecao } from './models/colecao';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'web';

  public colecaoParaExibir? : Colecao;

  public exibeColecao(colecao : Colecao): void{
    this.colecaoParaExibir = colecao;
  }
}
