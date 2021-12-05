import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-operacional',
  templateUrl: './area-operacional.component.html',
  styleUrls: ['./area-operacional.component.css']
})
export class AreaOperacionalComponent implements OnInit {

  beneficios: any[] = [
    {
      id: 1,
      nome: "Kit Cesta Fria de Natal",
      evento: 1,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 2,
      nome: "Kit Material Escolar de Natal",
      evento: 1,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 3,
      nome: "Kit Cesta Seca de Natal",
      evento: 1,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 4,
      nome: "Kit Cesta Fria de Páscoa",
      evento: 2,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 5,
      nome: "Kit Material Escolar de Páscoa",
      evento: 2,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 6,
      nome: "Kit Cesta Seca Junina",
      evento: 2,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 7,
      nome: "Kit Material Escolar de Carnaval",
      evento: 4,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
    },
    {
      id: 8,
      nome: "Kit Cesta Seca de Carnaval",
      evento: 4,
      beneficiarios:[
        {
          id: 1,
          evento:1,
          edv: 897213,
          nome: 'Joelcio Leandro',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 2,
          evento: 1,
          edv: 897213,
          nome: 'Valmir Seguro',
          cpf: '',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO',
        },
        {
          id: 3,
          evento: 2,
          edv: 897213,
          nome: 'Julianna Risseto',
          cpf: '123.456.789-10',
          area:'EXPATRIADO'}
      ]
      },
    ];

  ;

  constructor() { }

  ngOnInit(): void {
  }

  send(){
    console.log(this.beneficios)
  }

}
