import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Beneficiario {
  id: number,
  edv: number,
  nome: string,
  cpf: string,
  area:string,
  user: string,
  produtos: {
      id: number,
      quantidade: number,
      nome: string
    }[],
  dataInclusao: Date,
  terceiro: string,
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
      user: 'Import Process',
      produtos: [
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
      terceiro: 'Valmir Seguro',
    },
    {
      id: 2,
      evento: 2,
      edv: 897213,
      nome: 'Valmir Seguro',
      cpf: '',
      area:'EXPATRIADO',
      user: '',
      produtos: [
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
      terceiro: '',
    },
    {
      id: 3,
      evento: 1,
      edv: 897213,
      nome: 'Julianna Risseto',
      cpf: '123.456.789-10',
      area:'EXPATRIADO',
      user: 'Import Process',
      produtos: [
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
      terceiro: '',
    },
  ]

  beneficiarios!: Beneficiario[]

  buscaBeneficiarios!:Beneficiario[]

  valorBuscado: string = ''

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idEventoFromRoute = Number(routeParams.get('idEvento'));

    this.beneficiarios = this.beneficiariosRegistrados.filter(beneficiario => beneficiario.evento === idEventoFromRoute);
    this.buscaBeneficiarios = this.beneficiarios
  }

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  buscar(): void {
    this.buscaBeneficiarios = this.beneficiarios.filter(beneficiario => beneficiario.nome.toLowerCase().includes(this.valorBuscado.toLowerCase())) 
  }
  
  limpar(): void {
    this.valorBuscado = ''
    this.buscaBeneficiarios = this.beneficiarios
  }

}
