import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-flutuante',
  templateUrl: './botao-flutuante.component.html',
  styleUrls: ['./botao-flutuante.component.css']
})
export class BotaoFlutuanteComponent implements OnInit {

  @Input() icone!: string;
  @Input() tamanho!: 'pequeno' | 'grande';
  @Input() cor!: 'azul' | 'branco';
  @Input() tipo: 'submit' | 'button' = 'button';

  constructor() { }

  ngOnInit(): void {
  }

}
