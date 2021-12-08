import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['../area-administrativa.component.css','./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  @Output() buscar = new EventEmitter;
  @Output() limpar = new EventEmitter;
  larguraTela: number = 0;

  valorBuscado: string = ''

  constructor() { }

  ngOnInit(): void {
    this.larguraTela = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.larguraTela = event.target.innerWidth;
	}

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  limparValor(): void {
    this.valorBuscado = ''
  }
}
