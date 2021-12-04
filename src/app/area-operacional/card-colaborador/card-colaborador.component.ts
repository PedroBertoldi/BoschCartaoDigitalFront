import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-colaborador',
  templateUrl: './card-colaborador.component.html',
  styleUrls: ['./card-colaborador.component.css']
})
export class CardColaboradorComponent implements OnInit {

  check: boolean = false;

  beneficiarios: any[] = [
    {
      id: 1,
      evento:1,
      edv: 897213,
      nome: 'Joelcio Leandro',
      cpf: '123.456.789-10',
      area:'EXPATRIADO',
      beneficios: [
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
      ],
      dataInclusao: new Date,
      indicado: 'Valmir Seguro',
    },
    {
      id: 2,
      evento: 1,
      edv: 897213,
      nome: 'Valmir Seguro',
      cpf: '',
      area:'EXPATRIADO',
      beneficios: [
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
      ],
      dataInclusao: new Date,
      indicado: '',
    },
    {
      id: 3,
      evento: 2,
      edv: 897213,
      nome: 'Julianna Risseto',
      cpf: '123.456.789-10',
      area:'EXPATRIADO',
      beneficios: [
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
      ],
      dataInclusao: new Date,
      indicado: '',
    },
    {
      id: 3,
      evento: 2,
      edv: 897213,
      nome: 'Julianna Risseto',
      cpf: '123.456.789-10',
      area:'EXPATRIADO',
      beneficios: [
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
      ],
      dataInclusao: new Date,
      indicado: '',
    },
    {
      id: 3,
      evento: 2,
      edv: 897213,
      nome: 'Julianna Risseto',
      cpf: '123.456.789-10',
      area:'EXPATRIADO',
      beneficios: [
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
        {
          id: 1,
          quantidade: 1,
          nome: 'Kit Happy Hour'
        },
        {
          id: 2,
          quantidade: 2,
          nome: 'Cesta Fria'
        },
        {
          id: 1,
          quantidade: 5,
          nome: 'Kit Cesta Seca'
        },
      ],
      dataInclusao: new Date,
      indicado: '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  selecionarColaborador() {
    this.check = !this.check;
  }

}
