import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ItemLista} from './itemLista'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-lista-compras',
  imports: [FormsModule, CommonModule],
  templateUrl: './lista-compras.component.html',
  styleUrl: './lista-compras.component.scss'
})
export class ListaComprasComponent {
  itemInserido:string ='';
  lista:ItemLista[]=[];


  adicionarItem(){
    let itemLista = new ItemLista();
    itemLista.nome = this.itemInserido;
    itemLista.id = this.lista.length + 1;
    this.lista.push(itemLista);
   
    this.itemInserido='';
  }

  riscarItem(itemLista: ItemLista){
    itemLista.comprado = !itemLista.comprado;
  }

  limparLista(){
    this.lista = [];
  }

}
