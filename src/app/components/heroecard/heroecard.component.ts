import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroecard',
  templateUrl: './heroecard.component.html',
  styleUrls: ['./heroecard.component.css']
})

export class HeroecardComponent implements OnInit {
  // Decorador con la sentencia INPUT, indico que heroe viene por fuera.
  @Input() heroe: any = {};
  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;

  constructor(private router: Router) { 
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {

  }

  verHeroe() {
    //this.router.navigate(['/heroe', this.index]);
    this.heroeSeleccionado.emit(this.index);
  }

}
