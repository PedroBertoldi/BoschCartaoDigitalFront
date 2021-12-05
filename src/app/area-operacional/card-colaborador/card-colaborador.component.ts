import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-colaborador',
  templateUrl: './card-colaborador.component.html',
  styleUrls: ['./card-colaborador.component.css']
})
export class CardColaboradorComponent implements OnInit {


  @Input() beneficiarios!: any[];

  constructor() { }

  ngOnInit(): void {
  }

  selecionarColaborador(beneficiario:any) {
    beneficiario.check = !beneficiario.check;
  }

}
