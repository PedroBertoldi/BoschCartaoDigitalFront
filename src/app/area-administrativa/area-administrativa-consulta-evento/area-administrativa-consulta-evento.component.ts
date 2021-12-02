import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-administrativa-consulta-evento',
  templateUrl: './area-administrativa-consulta-evento.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-consulta-evento.component.css']
})
export class AreaAdministrativaConsultaEventoComponent implements OnInit {

  eventos = [
    {
      id: 1,
      nome: 'Final de ano 2021',
      inicio: '19-12-2021',
      fim: '20-12-2021',
      ativo: true,
    },
    {
      id: 2,
      nome: 'Páscoa 2022',
      inicio: '17-04-2022',
      fim: '18-04-2022',
      ativo: false,
    },
    {
      id: 3,
      nome: 'Festa Junina 2022',
      inicio: '23-06-2022',
      fim: '24-06-2022',
      ativo: false,
    },
    {
      id: 4,
      nome: 'Carnaval 2022',
      inicio: '25-02-2022',
      fim: '26-02-2022',
      ativo: false,
    },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
