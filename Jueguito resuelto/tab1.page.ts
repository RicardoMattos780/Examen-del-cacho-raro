import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  dado1 = 0;
  dado2 = 0;
  dado3 = 0;
  dado4 = 0;
  suma = 0;
  eleccion = '';
  resultado: string;

  constructor() {}

  calcularSuma() {

    this.dado1 = Math.floor(Math.random() * 3) + 1;
    this.dado2 = Math.floor(Math.random() * 3) + 1;
    this.dado3 = Math.floor(Math.random() * 3) + 1;
    this.dado4 = Math.floor(Math.random() * 3) + 1;

    this.suma = this.dado1 + this.dado2 + this.dado3 + this.dado4;
    if (this.dado1 == 1 && this.dado2 == 1 && this.dado3 == 1 && this.dado4 == 1) {
      this.resultado = 'Ganaste!! :3';
    }
    else if (this.dado1 == 2 && this.dado2 == 2 && this.dado3 == 2 && this.dado4 == 2) {
      this.resultado = 'Ganaste!! :3';
    }
    else if (this.dado1 == 3 && this.dado2 == 3 && this.dado3 == 3 && this.dado4 == 3) {
      this.resultado = 'Ganaste!! :3';
    }
    else {
      this.resultado = 'Perdiste :c';
    }
  }
}
