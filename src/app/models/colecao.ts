import { Genero } from "./genero";
import { Livro } from "./livro";

export class Colecao{

  constructor(
    public id: string,
    public genero: Genero,
    public livros: Livro[]
  ){

  }
}
