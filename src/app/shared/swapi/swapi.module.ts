import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarWarsService } from './swapi.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    StarWarsService
  ]
})
export class SwapiModule { }
