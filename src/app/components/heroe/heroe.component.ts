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
  }


}
