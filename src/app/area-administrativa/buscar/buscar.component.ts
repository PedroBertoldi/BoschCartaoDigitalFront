import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['../area-administrativa.component.css','./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @Output() buscar = new EventEmitter;
  @Output() limpar = new EventEmitter;

  valorBuscado: string = ''

  constructor() { }

  ngOnInit(): void {
  }

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  limparValor(): void {
    this.valorBuscado = ''
  }
}
