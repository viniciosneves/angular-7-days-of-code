import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './paginas/home/home.component';
import { PessoasComponent } from './paginas/pessoas/pessoas.component';
import { PlanetasComponent } from './paginas/planetas/planetas.component';
import { EspeciesComponent } from './paginas/especies/especies.component';
import { NavesComponent } from './paginas/naves/naves.component';
import { VeiculosComponent } from './paginas/veiculos/veiculos.component';
import { FilmesComponent } from './paginas/filmes/filmes.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmes', component: FilmesComponent },
  { path: 'pessoas', component: PessoasComponent },
  { path: 'planetas', component: PlanetasComponent },
  { path: 'especies', component: EspeciesComponent },
  { path: 'naves', component: NavesComponent },
  { path: 'veiculos', component: VeiculosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
