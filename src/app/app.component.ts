import { Component } from '@angular/core';
import { helloWorldComponent } from './helloworld.component'
import { MinhapaginaComponent} from './minhapagina/minhapagina.component'
import {CalculadoraComponent} from './calculadora/calculadora.component'

@Component({
  selector: 'app-root',
  imports: [  helloWorldComponent, MinhapaginaComponent, CalculadoraComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'conceitos-basicos';
}
