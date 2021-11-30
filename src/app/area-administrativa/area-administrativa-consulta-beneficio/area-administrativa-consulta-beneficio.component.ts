import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface Beneficio {
  id: number,
  evento: number,
  nome: string,
}

@Component({
  selector: 'app-area-administrativa-consulta-beneficio',
  templateUrl: './area-administrativa-consulta-beneficio.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-beneficio.component.css']
})
export class AreaAdministrativaConsultaBeneficioComponent implements OnInit {

  beneficiosRegistrados:Beneficio[] = [
    {
      id: 1,
      nome: "Kit Cesta Fria de Natal",
      evento: 1
    },
    {
      id: 2,
      nome: "Kit Material Escolar de Natal",
      evento: 1
    },
    {
      id: 3,
      nome: "Kit Cesta Seca de Natal",
      evento: 1
    },
    {
      id: 4,
      nome: "Kit Cesta Fria de Páscoa",
      evento: 2
    },
    {
      id: 5,
      nome: "Kit Material Escolar de Páscoa",
      evento: 2
    },
    {
      id: 6,
      nome: "Kit Cesta Seca Junina",
      evento: 3
    },
    {
      id: 7,
      nome: "Kit Material Escolar de Carnaval",
      evento: 4
    },
    {
      id: 8,
      nome: "Kit Cesta Seca de Carnaval",
      evento: 4
    },
  ];

  beneficios!: Beneficio[]

  buscaBeneficios!:Beneficio[]

  valorBuscado: string = ''


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const idEventoFromRoute = Number(routeParams.get('idEvento'));

    // Encontra os produtos a partir do ID
    this.beneficios = this.beneficiosRegistrados.filter(beneficio => beneficio.evento === idEventoFromRoute);
    this.buscaBeneficios = this.beneficios
  }

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  buscar(): void {
    this.buscaBeneficios = this.beneficios.filter(beneficio => beneficio.nome.toLowerCase().includes(this.valorBuscado.toLowerCase())) 
  }
  
  limpar(): void {
    this.valorBuscado = ''
    this.buscaBeneficios = this.beneficios
  }

}
