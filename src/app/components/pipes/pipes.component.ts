import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html'
})

export class PipesComponent {

  constructor() { 
  }

  name: string = 'Capitan America';
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  characters: string[] = [
    'Ironman',
    'Spiderman',
    'Thor',
    'Scarlet',
    'Wannda'
  ];

  PI: number = Math.PI;
  percentage: number = 0.234; 
  currency = 1234.40;

  json = {
    name: 'Logan',
    key: 'Wolverine',
    age: 500,
    address:{
      street: 'Primera',
      home: 20
    }
  }

  valuePromise = new Promise<string>( (resolve) => {
    setTimeout(() => {
      resolve('LLego la data');
    }, 4500);
  })

}
