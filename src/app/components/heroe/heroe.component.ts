import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})

export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroeService: HeroesService) { 
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.getHeroe(params['id']);

      // Asignación de nuevo campo para el logo de la empresa que pertenece.
      this.heroe.home == 'DC' ? this.heroe['homePicture'] = 'assets/home/dc_logo.png' : this.heroe['homePicture'] = 'assets/home/marvel_logo.png';
    });

    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroeService.searchHeroes(params['name']);

      //Envio de valores indexados.
      this.heroe.name = this.heroe[0].name;
      this.heroe.aparicion = this.heroe[0].aparicion;
      this.heroe.bio = this.heroe[0].bio;
      this.heroe.home = this.heroe[0].home;
      this.heroe.picture = this.heroe[0].picture;

      // Asignación de nuevo campo para el logo de la empresa que pertenece.
      this.heroe[0].home == 'DC' ? this.heroe['homePicture'] = 'assets/home/dc_logo.png' : this.heroe['homePicture'] = 'assets/home/marvel_logo.png';
    });
  }


}
