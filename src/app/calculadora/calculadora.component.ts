import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';  //biblioteca angular para trablhar com formularios.

@Component({
  selector: 'app-calculadora',
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.scss'
})
export class CalculadoraComponent {

  numero1: number = 0;
  numero2: number= 0;
  resultado: number=0;

  calcularResultado(){
    console.log("chamando metodo para calcular o resultado")
    console.log("numero 1 = " + this.numero1 + "numero 2 = " + this.numero2)
    this.resultado = this.numero1 + this.numero2;
  }
}
