import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Filme, Nave, RespostaPaginada } from './swapi.entities';

@Injectable({
  providedIn: 'root'
})
export class StarWarsService {
  private apiUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) { }

  public obterFilmes(filtroTitulo?: string): Observable<RespostaPaginada<Filme>> {
    let url = `${this.apiUrl}films/`;
    if (filtroTitulo) {
      url += `?search=${filtroTitulo}`;
    }
    return this.http.get<RespostaPaginada<Filme>>(url);
  }
  public obterNaves(page: number): Observable<RespostaPaginada<Nave>> {
    const endpoint = `${this.apiUrl}starships/?page=${page}`;

    return this.http.get<RespostaPaginada<Nave>>(endpoint);
  }
}
