import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-botao-acao',
  templateUrl: './botao-acao.component.html',
  styleUrls: ['./botao-acao.component.css']
})
export class BotaoAcaoComponent implements OnInit {

  @Input() variante!: 'excluir' | 'beneficiarios' | 'beneficios' | 'editar'

  constructor() { }

  ngOnInit(): void {
  }

}
