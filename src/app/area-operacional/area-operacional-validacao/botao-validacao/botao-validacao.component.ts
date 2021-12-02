import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-validacao',
  templateUrl: './botao-validacao.component.html',
  styleUrls: ['./botao-validacao.component.css']
})
export class BotaoValidacaoComponent implements OnInit {

  @Input() variante!: 'ValidacaoCracha' | 'ValidacaoCpf' | 'ValidacaoEdv'

  constructor() { }

  ngOnInit(): void {
  }

}
