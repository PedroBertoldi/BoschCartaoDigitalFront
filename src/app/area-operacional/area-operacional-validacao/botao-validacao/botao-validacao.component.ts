import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-botao-validacao',
  templateUrl: './botao-validacao.component.html',
  styleUrls: ['./botao-validacao.component.css']
})
export class BotaoValidacaoComponent implements OnInit {

  @Input() variante!: 'ValidacaoCracha' | 'ValidacaoCPF' | 'ValidacaoEDV'

  @Output() buttonClick = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

}
