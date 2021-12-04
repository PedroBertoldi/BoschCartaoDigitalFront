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
      evento: 2
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

  constructor() { }

  ngOnInit(): void {
  }

}
