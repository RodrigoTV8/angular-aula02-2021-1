import { Component, Input, OnInit } from '@angular/core';
import { Livro } from 'src/app/models/livro';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  @Input()
  public livro?: Livro;

  constructor() { }

  ngOnInit(): void {
  }

}
