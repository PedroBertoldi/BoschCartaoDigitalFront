import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Beneficio } from '../area-administrativa-consulta-beneficio/area-administrativa-consulta-beneficio.component';

@Component({
  selector: 'app-area-administrativa-cadastro-beneficiarios',
  templateUrl: './area-administrativa-cadastro-beneficiarios.component.html',
  styleUrls: ['../area-administrativa.component.css','./area-administrativa-cadastro-beneficiarios.component.css']
})
export class AreaAdministrativaCadastroBeneficiariosComponent implements OnInit {

  idEventoFromRoute!: number;

  nomeEvento!: string | undefined;

  modalAberto = false;

  beneficiosEvento!: Beneficio[]

  beneficiosSelecionados: {
    id: number,
    quantidade: number,
    nome: string | undefined 
  }[] = []

  formSelecionarBeneficios = this.formBuilder.group({})

  formBeneficiario = this.formBuilder.group({
    nome: '',
    edv: '',
    cpf: '',
    area: '',
    indicado: '',
    evento: 0,
    beneficios: [],
    dataInclusao: new Date,
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

    const beneficiosRegistrados = [
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

    const routeParams = this.route.snapshot.paramMap;
    this.idEventoFromRoute = Number(routeParams.get('idEvento'));
    if(eventosRegistrados.find(evento => evento.id === this.idEventoFromRoute)) {
      this.nomeEvento = eventosRegistrados.find(evento => evento.id === this.idEventoFromRoute)?.nome
      this.beneficiosEvento = beneficiosRegistrados.filter(beneficio => beneficio.evento === this.idEventoFromRoute)
    }

    this.formSelecionarBeneficios = this.formBuilder.group(this.construtorFormGroup())
  }

  construtorFormGroup(): any {
    let grupo: any = {};

    for(let beneficio of this.beneficiosEvento) {
      const key = 'beneficio' + beneficio.id
      grupo[key] = 0
    }

    return grupo;
  }

  fecharModal() {
    this.modalAberto = false
  }

  abrirModal(): void {
    this.modalAberto = true
  }

  limparBeneficios(): void {
    this.formSelecionarBeneficios.setValue(this.construtorFormGroup())
  }


  inserirBeneficio(event: Event): void {
    const quantidade = Number((event.target as HTMLInputElement).value)
    const beneficioId = Number((event.target as HTMLInputElement).id)


    if(quantidade > 0) {
      this.beneficiosSelecionados.push({
        id: beneficioId,
        nome: (this.beneficiosEvento.find(beneficio => beneficio.id === beneficioId))?.nome,
        quantidade
      })
    } else {
      this.beneficiosSelecionados = this.beneficiosSelecionados.filter(beneficio => beneficio.id !== beneficioId)
    }
  }

  onSubmit(): void {
    this.formBeneficiario.setValue({
      ...(this.formBeneficiario.value),
      evento: this.idEventoFromRoute,
      beneficios: this.beneficiosSelecionados,
      dataInclusao: new Date,
    })

    if(this.formBeneficiario.valid){
      console.log(this.formBeneficiario.value)
      this.formBeneficiario.reset()
      this.abrirModal()
    }
  }
}
