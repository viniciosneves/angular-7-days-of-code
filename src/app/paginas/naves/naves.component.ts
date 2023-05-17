import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Nave } from 'src/app/shared/swapi/swapi.entities';
import { StarWarsService } from 'src/app/shared/swapi/swapi.service';

@Component({
  selector: 'app-naves',
  templateUrl: './naves.component.html',
  styleUrls: ['./naves.component.sass']
})
export class NavesComponent implements OnInit {
  
  naves: Nave[] = [];
  totalDeNaves: number = 0;

  colunas: string[] = ['name', 'model', 'manufacturer', 'hyperdrive_rating'];
  exibindoSpinner = false;
  filtroNome: string = '';
  filtroModelo: string = '';

  paginaAtual: number = 1;

  constructor(private starWarsService: StarWarsService) { }

  ngOnInit() {
    this.obterNaves();
  }
  manipularPaginacao(e: PageEvent) {
    this.paginaAtual = e.pageIndex + 1; 
    this.obterNaves(this.paginaAtual);
  }
  obterNaves(page: number = 1) {
    this.exibindoSpinner = true;
    this.starWarsService.obterNaves(page).subscribe(
      resultado => {
        this.naves = resultado.results;
        this.totalDeNaves = resultado.count
        this.exibindoSpinner = false;
      }
    );
  }
}
