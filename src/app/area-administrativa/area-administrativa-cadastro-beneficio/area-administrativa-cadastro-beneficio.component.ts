import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-area-administrativa-cadastro-beneficio',
  templateUrl: './area-administrativa-cadastro-beneficio.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-beneficio.component.css']
})
export class AreaAdministrativaCadastroBeneficioComponent implements OnInit {
  
    idEventoFromRoute!: number;
  
    nomeEvento!: string | undefined;
  
    modalAberto = false;

  formBeneficio = this.formBuilder.group({
    nome: '',
    evento: 0,
  })

  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const eventosRegistrados = [
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

    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    if(eventosRegistrados.find(evento => evento.id === this.idEventoFromRoute)) {
      this.nomeEvento = eventosRegistrados.find(evento => evento.id === this.idEventoFromRoute)?.nome
    }
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  obterValor(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  onSubmit(): void {
    this.formBeneficio.setValue({
      ...(this.formBeneficio.value),
      evento: this.idEventoFromRoute
    })

    if(this.formBeneficio.valid){
      console.log(this.formBeneficio.value)
      this.formBeneficio.reset()
      this.abrirModal()
    }
  }
}
