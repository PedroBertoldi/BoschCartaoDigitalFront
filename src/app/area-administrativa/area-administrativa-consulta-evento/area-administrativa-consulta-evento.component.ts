import { Component, OnInit } from '@angular/core';

interface Evento {
  id: number,
  nome: string,
  inicio: Date,
  fim: Date,
  ativo: boolean,
}

@Component({
  selector: 'app-area-administrativa-consulta-evento',
  templateUrl: './area-administrativa-consulta-evento.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-evento.component.css']
})
export class AreaAdministrativaConsultaEventoComponent implements OnInit {

  eventosRegistrados: Evento[] = [
    {
      id: 1,
      nome: 'Final de ano 2021',
      inicio: new Date('2021-12-19'),
      fim: new Date('2021-12-20'),
      ativo: true,
    },
    {
      id: 2,
      nome: 'Páscoa 2022',
      inicio: new Date('2022-04-17'),
      fim: new Date('2022-04-18'),
      ativo: false,
    },
    {
      id: 3,
      nome: 'Festa Junina 2022',
      inicio: new Date('2022-06-23'),
      fim: new Date('2022-06-24'),
      ativo: false,
    },
    {
      id: 4,
      nome: 'Carnaval 2022',
      inicio: new Date('2022-02-25'),
      fim: new Date('2022-02-26'),
      ativo: false,
    },
  ]

  eventos!: Evento[]

  eventosBuscados!: Evento[]


  constructor() { }

  ngOnInit(): void {
    this.eventos = this.eventosRegistrados
    this.eventosBuscados = this.eventos
  }
  
  buscar(valor: string): void {
    if(valor !== '') {
      console.log(valor)
      this.eventosBuscados = this.eventos.filter(evento => evento.nome.toLowerCase().includes(valor.toLowerCase()) )
    }
  }
  
  limpar(): void {
    this.eventosBuscados = this.eventos
  }

}
