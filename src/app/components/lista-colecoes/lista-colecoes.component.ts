import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Colecao } from 'src/app/models/colecao';
import { LivroService } from 'src/app/services/livro.service';

@Component({
  selector: 'app-lista-colecoes',
  templateUrl: './lista-colecoes.component.html',
  styleUrls: ['./lista-colecoes.component.css']
})
export class ListaColecoesComponent implements OnInit {

  @Output()
  public colecaoSelecionada: EventEmitter<Colecao> = new EventEmitter();

  public colecao$: Observable<Colecao[]> = this.livroService.get().pipe(
    tap( colecoes => {
      console.log('Chegou as coleções:', colecoes);
    })
  )

  constructor(
    private livroService: LivroService,
  ) { }

  ngOnInit(): void {
  }

  public selecionaColecao(colecao: Colecao): void{
    console.log("Selecionou a coleção: ", colecao);
    this.colecaoSelecionada.emit(colecao);
  }

}
