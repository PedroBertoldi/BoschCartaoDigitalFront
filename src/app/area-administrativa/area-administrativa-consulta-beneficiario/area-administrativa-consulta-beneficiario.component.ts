import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Beneficiario {
  id: number,
  edv: number,
  nome: string,
  cpf: string,
  area:string,
  beneficios: {
      id: number,
      quantidade: number,
      nome: string
    }[],
  dataInclusao: Date,
  indicado: string,
  evento: number
}

@Component({
  selector: 'app-area-administrativa-consulta-beneficiario',
  templateUrl: './area-administrativa-consulta-beneficiario.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-beneficiario.component.css']
})
export class AreaAdministrativaConsultaBeneficiarioComponent implements OnInit {

  beneficiariosRegistrados: Beneficiario[] = [
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
  ]

  idEventoFromRoute!: number;

  beneficiarios!: Beneficiario[]

  buscaBeneficiarios!:Beneficiario[]

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));

    this.beneficiarios = this.beneficiariosRegistrados.filter(beneficiario => beneficiario.evento === this.idEventoFromRoute);
    this.buscaBeneficiarios = this.beneficiarios
  }

  buscar(valor: string): void {
    function buscaCompleta(buscado: any): any {
      for(var prop in buscado) {
        const valorProp = (JSON.stringify(buscado[prop])).toLowerCase() 
        if(valorProp.includes(valor.toLowerCase())) {
          return valorProp.includes(valor.toLowerCase())
        }
      }
    }

    this.buscaBeneficiarios = this.beneficiarios.filter(buscaCompleta) 
  }
  
  limpar(): void {
    this.buscaBeneficiarios = this.beneficiarios
  }

}
