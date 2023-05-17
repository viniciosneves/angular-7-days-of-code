import { Component, OnInit } from '@angular/core';
import { Filme } from '.././../shared/swapi/swapi.entities';
import { StarWarsService } from 'src/app/shared/swapi/swapi.service';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.sass']
})
export class FilmesComponent implements OnInit {
  filmes: Filme[] = [];
  colunas: string[] = ['title', 'director', 'producer', 'release_date'];
  exibindoSpinner = false;
  filtroTitulo: string = '';

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.obterFilmes();
  }

  filtrarPorTitulo() {
    this.obterFilmes(this.filtroTitulo);
  }

  obterFilmes(filtroTitulo?: string) {
    this.exibindoSpinner = true;
    this.starWarsService.obterFilmes(filtroTitulo).subscribe(
      resultado => {
        this.filmes = resultado.results;
        this.exibindoSpinner = false;
      }
    );
  }

  formatarData(data: string) {
    const dataObj = new Date(data);
    return dataObj.toLocaleDateString('pt-BR');
  }
}
