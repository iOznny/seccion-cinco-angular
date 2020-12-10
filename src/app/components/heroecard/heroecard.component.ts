import { Component, OnInit, Input } from '@angular/core';
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

  constructor(private router: Router) { 

  }

  ngOnInit(): void {

  }

  verHeroe() {
    this.router.navigate(['/heroe', this.index]);
  }

}
