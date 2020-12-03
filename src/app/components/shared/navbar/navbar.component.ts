import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})

export class NavbarComponent implements OnInit {
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }

  //Realiza la busqueda del Héroe el cual se envia a un nuevo componente "SearchComponent".
  searchHeroe (heroe: string) {
    this.router.navigate(['/heroe/search/', heroe]);
  }

}
